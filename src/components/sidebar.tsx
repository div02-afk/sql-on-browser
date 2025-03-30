import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { PenLine, Plus } from "lucide-react";
import { Button } from "./ui/button";
import QueryHistoryItemCard from "./ui/card/query-history";
import { dummyQueryHistory } from "@/constants";

export function AppSidebar() {
  return (
    <Sidebar className="border-0">
      <SidebarHeader className="bg-[#050505] px-2 flex flex-col gap-4">
        <Button
          className="items-center flex justify-center gap-1 "
          variant={"secondary"}
        >
          New Query
          <PenLine />
        </Button>
        <div className="border-b-2 border-[#545454] w-full"></div>
      </SidebarHeader>
      <SidebarContent className="bg-[#050505] border-0">
        <SidebarGroup className="h-[70%] overflow-auto">
          {dummyQueryHistory.map((a, i) => (
            <QueryHistoryItemCard item={a} key={i} />
          ))}
        </SidebarGroup>
        <SidebarGroup className="">
          <Button variant={"outline"} className="gap-1">
            Add Connection
            <Plus />
          </Button>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#050505] border-0" />
    </Sidebar>
  );
}
