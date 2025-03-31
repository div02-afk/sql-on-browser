import { create } from "zustand";
import { persist, StorageValue } from "zustand/middleware";
import { del, get, set } from "idb-keyval";
import { Connection, Query, QuerySet } from "@/lib/types";
import { generateRandomQueryResult } from "@/lib/utils";
import { connections, dummyQueryHistory } from "@/constants";

const indexedDBStorage = {
  getItem: async (name: string) => {
    const value = await get(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: async (name: string, value: StorageValue<QueryStoreState>) => {
    await set(name, JSON.stringify(value));
  },
  removeItem: async (name: string) => {
    await del(name);
  },
};

interface QueryStoreState {
  querySets: QuerySet[];
  connections: Connection[];
  currentQuerySet: QuerySet | null;
  selectedConnection: string | null;
  setSelectedConnection: (connectionId: string | null) => void;
  addQuerySet: (querySet: QuerySet) => void;
  removeQuerySet: (id: string) => void;
  pinUnpinQuerySet: (id: string) => void;
  addQuery: (query: Query) => void;
  setCurrentQuerySet: (querySetId: string | null) => void;
  syncCurrentQuerySet: (querySetId: string) => void;
  addConnection: (connection: Connection) => void;
  removeConnection: (id: string) => void;
  runQuery: (query: string) => void;
}

const useQueryStore = create(
  persist<QueryStoreState>(
    (set) => ({
      querySets: dummyQueryHistory,
      connections: connections,
      currentQuerySet: null,
      selectedConnection: null,
      setSelectedConnection: (connectionId) =>
        set(() => ({ selectedConnection: connectionId })),
      addQuerySet: (querySet) =>
        set((state) => ({ querySets: [...state.querySets, querySet] })),
      removeQuerySet: (id) =>
        set((state) => ({
          querySets: state.querySets.filter((qs) => qs.id !== id),
        })),
      pinUnpinQuerySet: (id) =>
        set((state) => ({
          querySets: state.querySets.map((qs) =>
            qs.id === id ? { ...qs, pinned: !qs.pinned } : qs
          ),
        })),

      addQuery: (query) => {
        set((state) => ({
          querySets: state.querySets.map((qs) => {
            if (qs.id === state.currentQuerySet?.id) {
              return {
                ...qs,
                queries: [...qs.queries, query],
              };
            }
            return qs;
          }),
        }));
      },
      setCurrentQuerySet: (querySetId) =>
        set((state) => ({
          currentQuerySet: state.querySets.find((qs) => qs.id === querySetId),
        })),
      syncCurrentQuerySet: (querySetId) => {
        set((state) => ({
          currentQuerySet: state.querySets.find((qs) => qs.id === querySetId),
        }));
      },
      addConnection: (connection) =>
        set((state) => ({
          connections: [
            ...state.connections,
            {
              ...connection,
              id: Math.random().toString(36).substring(2, 15),
            },
          ],
        })),
      removeConnection: (id) =>
        set((state) => ({
          connections: state.connections.filter((conn) => conn.id !== id),
        })),
      runQuery: (query) => {
        const id = Math.random().toString(36).substring(2, 15);
        const randomData = generateRandomQueryResult();
        const newQuery: Query = {
          id,
          query,
          columns: randomData.columns,
          result: randomData.data,
          error: false,
          duration: Math.floor(Math.random() * 1000) + "ms",
          rows: 0,
          time: new Date().toISOString(),
        };
        console.log("newQuery", newQuery);
        set((state) => ({
          querySets: state.querySets.map((qs) => {
            if (qs.id === state.currentQuerySet?.id) {
              return {
                ...qs,
                queries: [...qs.queries, newQuery],
              };
            }
            return qs;
          }),
          currentQuerySet: state.querySets.find(
            (qs) => qs.id === state.currentQuerySet?.id
          ),
        }));
      },
    }),
    {
      name: "db-connections",
      storage: indexedDBStorage,
    }
  )
);

export default useQueryStore;
