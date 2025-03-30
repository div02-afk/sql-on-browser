import { QueryHistoryItem } from "@/lib/types";
import { Database, PinIcon, User } from "lucide-react";
import { useState } from "react";
import Tag from "../tag";

interface QueryHistoryItemProps {
  item: QueryHistoryItem;
}

export default function QueryHistoryItemCard({ item }: QueryHistoryItemProps) {
  const [pinned, setPinned] = useState(false);
  return (
    <div className="p-3 mb-2 bg-accent-foreground border border-[#595959] rounded-md shadow-sm">
      {/* <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4 text-gray-600" />
          <span className="font-semibold text-sm">{item.user}</span>
        </div>
        <Clock className="w-4 h-4 text-gray-500" />
      </div> */}

      <div
        className="text-xs flex text-white mb-2 items-center justify-between truncate"
        // title={item.query}
      >
        {item.title}
        <button className="p-1 cursor-pointer">
          <PinIcon
            className={`duration-300 transition-all scale-75 text-[${
              pinned ? "#888888" : "#585858"
            }]`}
            onClick={() => setPinned(!pinned)}
          />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-1 mb-2">
        <Tag
          color="#ffffff"
          title="database"
          icon={<Database className="w-3 h-3" />}
        >
          {item.database}
        </Tag>

        <Tag color="#cacaca" title="user" icon={<User className="w-3 h-3" />}>
          {item.user}
        </Tag>

        {/* {item.table && (
          <Tag color="#660ddd" title={"table"}>
            {item.table}
          </Tag>
        )} */}

        {/* <Tag title="rows" color="#00aacc">
          {item.rows} rows
        </Tag> */}

        {/* {item.error && (
          <Tag
            title="error"
            color="#ff0000"
            icon={<AlertTriangle className="w-3 h-3" />}
          >
            {item.error}
          </Tag>
        )} */}
      </div>

      <div className="text-xs text-[#585858] flex justify-between">
        <span>{item.time}</span>
        {/* <span>{item.duration}</span> */}
      </div>
    </div>
  );
}
