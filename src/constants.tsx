
import { Connection, QueryHistoryItem } from "./lib/types";

const dummyQueryHistory: QueryHistoryItem[] = [
  {
    title: "Fetch Users",
    database: "user_db",
    table: "users",
    user: "admin",
    host: "localhost",
    query: "SELECT * FROM users;",
    time: "2023-10-01 10:00:00",
    result: "Success",
    duration: "120ms",
    rows: "100",
    error: "",
  },
  {
    title: "Fetch Orders",
    database: "order_db",
    table: "orders",
    user: "manager",
    host: "localhost",
    query: "SELECT * FROM orders WHERE status = 'completed';",
    time: "2023-10-01 11:00:00",
    result: "Success",
    duration: "200ms",
    rows: "50",
    error: "",
  },
  {
    title: "Update Inventory",
    database: "inventory_db",
    table: "inventory",
    user: "admin",
    host: "localhost",
    query: "UPDATE inventory SET stock = stock - 1 WHERE item_id = 123;",
    time: "2023-10-01 12:00:00",
    result: "Failed",
    duration: "300ms",
    rows: "0",
    error: "Permission denied",
  },
  {
    title: "Update Inventory",
    database: "inventory_db",
    table: "inventory",
    user: "admin",
    host: "localhost",
    query: "UPDATE inventory SET stock = stock - 1 WHERE item_id = 123;",
    time: "2023-10-01 12:00:00",
    result: "Failed",
    duration: "300ms",
    rows: "0",
    error: "Permission denied",
  },
  {
    title: "Update Inventory",
    database: "inventory_db",
    table: "inventory",
    user: "admin",
    host: "localhost",
    query: "UPDATE inventory SET stock = stock - 1 WHERE item_id = 123;",
    time: "2023-10-01 12:00:00",
    result: "Failed",
    duration: "300ms",
    rows: "0",
    error: "Permission denied",
  },
  {
    title: "Update Inventory",
    database: "inventory_db",
    table: "inventory",
    user: "admin",
    host: "localhost",
    query: "UPDATE inventory SET stock = stock - 1 WHERE item_id = 123;",
    time: "2023-10-01 12:00:00",
    result: "Failed",
    duration: "300ms",
    rows: "0",
    error: "Permission denied",
  },
];





const connections: Connection[] = [
  {
    id: 1,
    name: "Localhost User DB",
    host: "localhost",
    database: "user_db",
    user: "admin",
    password: "password123",
  },
  {
    id: 2,
    name: "Localhost Order DB",
    host: "localhost",
    database: "order_db",
    user: "manager",
    password: "manager123",
  },
  {
    id: 3,
    name: "Localhost Inventory DB",
    host: "localhost",
    database: "inventory_db",
    user: "admin",
    password: "admin123",
  }
];
export { dummyQueryHistory,connections };
