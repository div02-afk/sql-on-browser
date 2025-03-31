import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Download } from "lucide-react";

export function DownloadPopover({
  download,
}: {
  download: (type: string) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          className="cursor-pointer bg-transparent text-[#cacaca] hover:text-white "
        >
          <Download />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-[#0e0e0e] text-[#585858] border-[#2A2A2A]">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-[#cacaca]">
              Download as
            </h4>
            <p className="text-sm text-muted-foreground">
              Select the format you want to download the data in.
            </p>
          </div>

          <div className="flex justify-evenly gap-2 text-[#0e0e0e]">
            <Button
              variant="outline"
              className="w-1/2"
              onClick={() => download("application/json")}
            >
              JSON
            </Button>
            <Button
              variant="outline"
              className="w-1/2"
              onClick={() => download("text/csv")}
            >
              CSV
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
