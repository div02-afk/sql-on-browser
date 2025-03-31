import DataTable from "@/components/table";
import { Query } from "@/lib/types";
import useQueryStore from "@/store/queryStore";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
import { useState } from "react";
import Tag from "../tag";
import { DownloadPopover } from "@/components/download-popover";

export default function QueryResult({ query }: { query: Query }) {
  const [expanded, setExpanded] = useState(false);
  const { runQuery } = useQueryStore();
  const refetch = () => {
    runQuery(query.query);
  };
  const download = (type: string) => {
    if (type === "application/json") {
      const jsonString = JSON.stringify(query.result, null, 2);
      const blob = new Blob([jsonString], { type: type });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.json";
      a.click();
      URL.revokeObjectURL(url);
    } else if (type === "text/csv") {
      const csvData = query.result.map((row) => {
        return Object.values(row).join(",");
      });
      const csvString = csvData.join("\n");
      const blob = new Blob([csvString], { type: type });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.csv";
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className=" border-[#2A2A2A] border rounded-xl items-center overflow-hidden h-auto  max-w-3xl mx-auto w-full">
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between px-4 py-2 items-center"
      >
        <p className="text-[#cacaca]">{query.query}</p>
        <div className="flex gap-2 items-center text-[#585858]">
          <Tag color="#0ff0f0" title="duration">
            {query.duration}
          </Tag>
          <Tag color="#ffffff" title="rows">
            {query.result.length} {query.rows === 1 ? "row" : "rows"}
          </Tag>
          <Tag color="#ff00ff" title="time">
            {query.time}
          </Tag>
          {query.error && (
            <Tag color="#ff0000" title="error">
              {query.error.toString()}
            </Tag>
          )}
          <RotateCcw
            onClick={(e) => {
              e.stopPropagation();
              refetch();
            }}
            className=" scale-75"
          />
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-[#191919] border-t border-[#2A2A2A]"
      >
        {query.result && (
          <div className="px-4 py-2 text-sm text-white">
            <div className="flex justify-end w-full">
              <DownloadPopover download={download} />
            </div>
            <DataTable data={query.result} columns={query.columns} />
          </div>
        )}
      </motion.div>
    </div>
  );
}
