import { QuerySet } from "@/lib/types";
import useQueryStore from "@/store/queryStore";
import { Database, PinIcon, User } from "lucide-react";
import Tag from "../tag";

export default function QueryHistoryItemCard({ item }: { item: QuerySet }) {
  const { pinUnpinQuerySet, setCurrentQuerySet, currentQuerySet, querySets } =
    useQueryStore();

  const thisQuerySet = querySets?.filter((query) => query.id === item.id)[0];

  return (
    <div
      className={`p-3 mb-2 bg-accent-foreground border border-[#595959] rounded-md shadow-sm transition-all duration-300
        ${currentQuerySet?.id === item.id && "border-[#cacaca]"}
        `}
      onClick={() => {
        console.log("clicked", item.id);
        setCurrentQuerySet(item.id);
      }}
    >
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
        <button
          onClick={(e) => {
            e.stopPropagation();
            pinUnpinQuerySet(item.id);
          }}
          className="p-2 cursor-pointer"
        >
          <PinIcon
            className={`duration-300 transition-all scale-75 text-[${
              thisQuerySet.pinned ? "#888888" : "#585858"
            }]`}
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

      {/* <div className="text-xs text-[#585858] flex justify-between"> */}
      {/* <span>{item.time}</span> */}
      {/* <span>{item.duration}</span> */}
      {/* </div> */}
    </div>
  );
}
