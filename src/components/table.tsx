import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

export default function DataTable({
  columns,
  data,
}: {
  columns: string[];
  data: {
    [key: string]: string | number | boolean | Date | null | undefined;
  }[];
}) {
  console.log("columns", columns);
  console.log("data", data);
  const tableColumns = useMemo(() => {
    return columns.map((col) => ({
      accessorKey: col,
      header: col,
    }));
  }, [columns]);

  const table = useReactTable({
    columns: tableColumns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4 w-full overflow-auto max-h-[400px] custom-scrollbar">
      <table className="w-full border border-gray-300">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border p-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
