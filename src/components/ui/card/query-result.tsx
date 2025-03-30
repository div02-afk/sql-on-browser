import { Query } from "@/lib/types";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
import { useState } from "react";
import Tag from "../tag";

export default function QueryResult({ query }: { query: Query }) {
  const [expanded, setExpanded] = useState(false);
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
            {query.rows} {query.rows === 1 ? "row" : "rows"}
          </Tag>
          <Tag color="#ff00ff" title="time">
            {query.time}
          </Tag>
          {query.error && (
            <Tag color="#ff0000" title="error">
              {query.error.toString()}
            </Tag>
          )}
          <RotateCcw className=" scale-75" />
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
            {Object.entries(query.result).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="font-semibold">{key}:</span>
                <span>{JSON.stringify(value)}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
