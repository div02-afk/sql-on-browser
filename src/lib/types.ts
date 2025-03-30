interface Connection {
  id: number;
  name: string;
  host: string;
  database: string;
  user: string;
  password: string;
}

interface Query {
  id: string;
  query: string;
  result: object;
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
  database: string;
  user: string;
  host: string;
  time: string;
  
}
export type { Connection, QuerySet, Query, QueryHistoryItem };
