import { create } from "zustand";

import { Connection, Query, QuerySet } from "@/lib/types";

interface QueryStoreState {
  querySets: QuerySet[];
  connections: Connection[];
  currentQuerySet: QuerySet | null;
  addQuerySet: (querySet: QuerySet) => void;
  removeQuerySet: (id: string) => void;
  pinQuerySet: (id: string) => void;
  unpinQuerySet: (id: string) => void;
  addQuery: (query: Query) => void;
  setCurrentQuerySet: (querySetId: string) => void;
  syncCurrentQuerySet: (querySetId: string) => void;
  addConnection: (connection: Connection) => void;
  removeConnection: (id: number) => void;
}

const useQueryStore = create<QueryStoreState>((set) => ({
  querySets: [],
  connections: [],
  currentQuerySet: null,

  addQuerySet: (querySet) =>
    set((state) => ({ querySets: [...state.querySets, querySet] })),
  removeQuerySet: (id) =>
    set((state) => ({
      querySets: state.querySets.filter((qs) => qs.id !== id),
    })),
  pinQuerySet: (id) =>
    set((state) => ({
      querySets: state.querySets.map((qs) =>
        qs.id === id ? { ...qs, pinned: true } : qs
      ),
    })),
  unpinQuerySet: (id) =>
    set((state) => ({
      querySets: state.querySets.map((qs) =>
        qs.id === id ? { ...qs, pinned: false } : qs
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
    set((state) => ({ connections: [...state.connections, connection] })),
  removeConnection: (id) =>
    set((state) => ({
      connections: state.connections.filter((conn) => conn.id !== id),
    })),
}));

export default useQueryStore;
