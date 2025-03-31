interface Connection {
  id: string;
  name: string;
  host: string;
  database: string;
  username: string;
  password: string;
}

interface Query {
  id: string;
  query: string;
  columns: string[];
  result: {
    [key: string]: string | number | boolean | Date | null | undefined;
  }[];
  error: boolean;
  duration: string;
  rows: number;
  time: string;
}

interface QuerySet {
  title: string;
  queries: Query[];
  database: string;
  connection: string;
  user: string;
  id: string;
  pinned: boolean;
}
interface QueryHistoryItem {
  title: string;
  id: string;
  database: string;
  user: string;
  host: string;
  time: string;
}
export type { Connection, QuerySet, Query, QueryHistoryItem };
