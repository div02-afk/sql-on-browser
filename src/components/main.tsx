import { Check, ChevronRight, Edit } from "lucide-react";
import { Input } from "./ui/input";
import { SelectConnection } from "./select-connection";
import { useState } from "react";
import QueryResult from "./ui/card/query-result";
import { Query } from "@/lib/types";




export default function Main() {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [title, setTitle] = useState({
    current: "Title",
    edit: "",
  });

  const queries: Query[] = [
    {
      query: "SELECT * FROM users",
      result: { id: 1, name: "John Doe", email: "john@example.com" },
      error: false,
      duration: "0.5s",
      rows: 1,
      time: "2023-10-01 12:00:00",
    },
    {
      query: "SELECT * FROM orders",
      result: { orderId: 101, product: "Laptop", quantity: 2 },
      error: false,
      duration: "1.2s",
      rows: 1,
      time: "2023-10-01 12:05:00",
    },
    {
      query: "SELECT * FROM invalid_table",
      result: {},
      error: true,
      duration: "0.3s",
      rows: 0,
      time: "2023-10-01 12:10:00",
    },
  ];
  return (
    <div className="w-full h-full bg-[#0e0e0e] text-white">
      <div className="w-full flex justify-between px-6 py-4">
        <div>
          {isEditingTitle ? (
            <div className="flex gap-2 items-center">
              <Input
                value={title.edit}
                onChange={(e) => setTitle({ ...title, edit: e.target.value })}
                placeholder="title"
                className="text-white placeholder:text-[#585858]"
              ></Input>
              <Check
                onClick={() => {
                  setIsEditingTitle(false);
                  setTitle({
                    ...title,
                    current: title.edit,
                  });
                }}
              />
            </div>
          ) : (
            <p className="text-4xl items-center">
              {title.current}
              <span
                className="inline-flex ml-2"
                onClick={() => setIsEditingTitle(true)}
              >
                <Edit />
              </span>
            </p>
          )}
        </div>
        <div>
          <SelectConnection />
        </div>
      </div>
      <div className="pt-20">
        <div className="flex border-2 border-[#585858] rounded-[20px] items-center max-w-[800px] mx-auto px-2 py-1">
          <Input
            placeholder="SQL query"
            className="border-0 w-full focus:ring-0 line-clamp-4 focus-visible:ring-0 outline-0 placeholder:text-2xl selection:bg-[#cacaca] selection:text-black  mx-auto py-10 text-white rounded-[20px]"
            style={{
              fontSize: "20px",
            }}
          />
          <button className="hover:bg-[#383838] transition-all duration-300 rounded-2xl px-4 py-4 h-fit">
            <ChevronRight className="bg-transparent text-white items-center " />
          </button>
        </div>
        <div className="flex flex-col gap-6 w-full mt-6">{queries.map((query, index) => {
          return <QueryResult query={query} key={index} />;
        })}</div>
      </div>
    </div>
  );
}
