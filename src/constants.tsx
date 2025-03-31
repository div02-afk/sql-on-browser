import { Connection, QuerySet } from "./lib/types";

const dummyQueryHistory: QuerySet[] = [
  {
    id: "1",
    title: "Fetch all users",
    queries: [],
    database: "user_db",
    connection: "Localhost User DB",
    user: "admin",
    pinned: false,
  },
  {
    id: "2",
    title: "Fetch all orders",
    queries: [],
    database: "order_db",
    connection: "Localhost Order DB",
    user: "manager",
    pinned: true,
  },
  {
    id: "3",
    title: "Fetch inventory items",
    queries: [],
    database: "inventory_db",
    connection: "Localhost Inventory DB",
    user: "admin",
    pinned: false,
  },
];

const connections: Connection[] = [
  {
    id: "1",
    name: "Localhost User DB",
    host: "localhost",
    database: "user_db",
    user: "admin",
    password: "password123",
  },
  {
    id: "2",
    name: "Localhost Order DB",
    host: "localhost",
    database: "order_db",
    user: "manager",
    password: "manager123",
  },
  {
    id: "3",
    name: "Localhost Inventory DB",
    host: "localhost",
    database: "inventory_db",
    user: "admin",
    password: "admin123",
  },
];
export { connections, dummyQueryHistory };

