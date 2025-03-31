# Query Manager

A web-based SQL query management tool built with Vite, React, TypeScript, and Tailwind. It allows users to execute queries across multiple database connections, view results using TanStack Table, and manage query groups efficiently.

## Features

- **Query Execution**: Input and run SQL queries with results displayed using TanStack Table.
- **Multiple Database Connections**: Seamlessly switch between different database connections.
- **Bulk Import**: Import queries from JSON or CSV files.
- **Query Groups**:
  - Create new query groups.
  - Pin/unpin query groups.
  - Organize groups by database and user.
- **Download Query Results**: Export results in JSON or CSV format.
- **Persistent State Management**: Uses Zustand with IndexedDB instead of LocalStorage for improved performance and scalability.
- **Future Enhancements**:
  - Query Builder for visual query construction.

## Tech Stack

- **Frontend**: Vite, React, TypeScript, Tailwind, ShadCN
- **State Management**: Zustand with IndexedDB
- **Data Table**: TanStack Table
- **Database Engine**: (Attempted) SQLite WASM for in-browser SQL execution

## Dependencies
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [TanStack Table](https://tanstack.com/table/v8)
- [Papaparse](https://www.papaparse.com/)


## Performance Metrics (Lighthouse)

- **First Contentful Paint**: 0.7 s
- **Largest Contentful Paint**: 0.7 s
- **Total Blocking Time**: 10 ms
- **Cumulative Layout Shift**: 0
- **Speed Index**: 0.8 s

## Contributing

Contributions are welcome! Feel free to fork the repository, submit issues, or open pull requests.

## License

This project is licensed under the MIT License.

