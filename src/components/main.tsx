import useQueryStore from "@/store/queryStore";
import { Check, ChevronRight, Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { SelectConnection } from "./select-connection";
import QueryResult from "./ui/card/query-result";
import { Input } from "./ui/input";
import Tag from "./ui/tag";
import BulkInsertDialog from "./ui/dialog/bulk-insert";

export default function Main() {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState({
    current: "Title",
    edit: "title",
  });

  const {
    currentQuerySet,
    setCurrentQuerySet,
    runQuery,
    addQuerySet,
    querySets,
  } = useQueryStore();
  const temp = querySets.filter(
    (querySet) => querySet.id === currentQuerySet?.id
  )[0];
  useEffect(() => {
    if (currentQuerySet) {
      setTitle({
        ...title,
        current: currentQuerySet.title,
        edit: currentQuerySet.title,
      });
      setQuery("");
    } else {
      setTitle({
        ...title,
        current: "Title",
        edit: "title",
      });
      setQuery("");
    }
    console.log("currentQuerySet changed", currentQuerySet);
  }, [currentQuerySet]);
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
        <div className="flex border-2 border-[#585858] rounded-[20px] items-center w-full max-w-[800px] mx-auto px-2 py-1 ">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            autoFocus
            placeholder="SQL query"
            className=" border-0 w-full focus:ring-0 line-clamp-4 focus-visible:ring-0 outline-0 placeholder:text-2xl selection:bg-[#cacaca] selection:text-black  mx-auto py-10 text-white rounded-[20px]"
            style={{
              fontSize: "20px",
            }}
          />
          <button
            disabled={query === ""}
            className={`hover:bg-[#383838] transition-all duration-300 ${
              query === "" ? "cursor-not-allowed" : "cursor-pointer"
            } rounded-2xl px-4 py-4 h-fit`}
          >
            <ChevronRight
              className="bg-transparent text-white items-center "
              onClick={() => {
                if (query === "") {
                  return;
                }
                if (currentQuerySet) {
                  console.log("currentQuerySet", currentQuerySet);
                  runQuery(query);
                  setQuery("");
                } else {
                  console.log("currentQuerySet is null", currentQuerySet);
                  const newQuerySet = {
                    queries: [],
                    title: title.current,
                    connection: "default",
                    database: "default",
                    user: "default",
                    id: Math.random().toString(36).substring(2, 15),
                    pinned: false,
                  };
                  addQuerySet(newQuerySet);
                  setCurrentQuerySet(newQuerySet.id);
                  runQuery(query);
                  // addQuerySet({
                  //   queries: [],
                  //   title: title.current,
                  //   connection: "default",
                  // })
                }
              }}
            />
          </button>
        </div>
        <div className="w-full flex gap-4 flex-row-reverse mx-auto max-w-[800px] py-4">
          <Tag color={"#585858"}>Query Builder</Tag>
          <BulkInsertDialog />
        </div>
        <div className="flex gap-6 w-full mt-6 custom-scrollbar overflow-auto pb-20 flex-col-reverse">
          {temp &&
            temp.queries.map((query, index) => {
              return <QueryResult query={query} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
