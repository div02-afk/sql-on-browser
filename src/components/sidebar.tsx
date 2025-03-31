import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import useQueryStore from "@/store/queryStore";
import { PenLine, Settings, User } from "lucide-react";
import { NewConnectionDialog } from "./ui/dialog/new-connection";
import { Button } from "./ui/button";
import QueryHistoryItemCard from "./ui/card/query-history";

export function AppSidebar() {
  const { querySets, setCurrentQuerySet } = useQueryStore();
  const pinnedQuerySets = querySets.filter((a) => a.pinned);
  const unpinnedQuerySets = querySets.filter((a) => !a.pinned);
  return (
    <Sidebar className="border-0">
      <SidebarHeader className="bg-[#050505] px-2 flex flex-col gap-4 py-3">
        <Button
          onClick={() => {
            setCurrentQuerySet(null);
          }}
          className="items-center flex justify-center gap-1 cursor-pointer"
          variant={"secondary"}
        >
          New Query
          <PenLine />
        </Button>
        <div className="border-b-2 border-[#545454] w-full"></div>
      </SidebarHeader>
      <SidebarContent className="bg-[#050505] border-0 py-2">
        <SidebarGroup className="h-[80%] overflow-auto custom-scrollbar">
          {pinnedQuerySets.map((a, i) => (
            <QueryHistoryItemCard item={a} key={i} />
          ))}
          {unpinnedQuerySets.map((a, i) => (
            <QueryHistoryItemCard item={a} key={i} />
          ))}
        </SidebarGroup>
        <SidebarGroup className="flex flex-col gap-4 items-center w-full mt-auto p-3">
          <NewConnectionDialog />

          <div className="flex gap-6 w-full items-center">
            <User className="text-[#585858] hover:text-[#ffffff] transition-all duration-300" />
            <Settings className="text-[#585858] hover:text-[#ffffff] transition-all duration-300" />
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#050505] border-0" />
    </Sidebar>
  );
}
