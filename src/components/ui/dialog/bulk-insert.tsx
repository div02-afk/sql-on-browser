import { useState } from "react";
import { Button } from "../button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { Input } from "../input";
import { Label } from "../label";
import Tag from "../tag";
import Papa from "papaparse";
interface BulkImport {
  file: File | undefined;
  table: string;
    parsedData?: any[];
}

export default function BulkInsertDialog() {
  const [bulkImport, setBulkImport] = useState<BulkImport>({
    file: undefined,
    table: "",
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Tag color={"#cacaca"}>Bulk Import</Tag>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#0e0e0e] border-[#585858] text-[#cacaca]">
        <DialogHeader>
          <DialogTitle className="text-[#cacaca]">
            Bulk import data from file
          </DialogTitle>
          <DialogDescription className="text-[#585858]">
            Upload a CSV or JSON file to insert data into your database table.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {" "}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label>
              <span className="text-[#585858]">File</span>
            </Label>
            <Input
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setBulkImport({ ...bulkImport, file });
                }
              }}
              accept=".csv, application/json"
              className="col-span-3 bg-[#0e0e0e] text-[#cacaca] border-[#585858] mx-auto"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label>
              <span className="text-[#585858]">Table</span>
            </Label>
            <Input
              type="text"
              value={bulkImport.table}
              onChange={(e) => {
                setBulkImport({ ...bulkImport, table: e.target.value });
              }}
              placeholder="table_name"
              className="col-span-3 bg-[#0e0e0e] text-[#cacaca] border-[#585858] mx-auto"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={bulkImport.file === undefined || bulkImport.table === ""}
            type="submit"
            className="bg-[#cacaca] text-[#0e0e0e] hover:bg-[#6b6b6b]"
            onClick={() => {
              if (!bulkImport.file) return;
              const file = bulkImport.file;
              const reader = new FileReader();
              reader.onload = (e) => {
                if (!e.target?.result) return;

                if (file.type === "application/json") {
                  // Parse JSON file
                  try {
                    const jsonData = JSON.parse(e.target.result as string);
                    console.log("Parsed JSON data:", jsonData);
                    setBulkImport((prev) => ({
                      ...prev,
                      parsedData: jsonData,
                    }));
                  } catch (error) {
                    console.error("Error parsing JSON:", error);
                  }
                } else if (file.type === "text/csv") {
                  // Parse CSV file
                  Papa.parse(e.target.result as string, {
                    header: true, // Treat first row as column headers
                    skipEmptyLines: true,
                    complete: (result) => {
                        console.log("Parsed CSV data:", result.data);
                      setBulkImport((prev) => ({
                        ...prev,
                        parsedData: result.data,
                      }));
                    },
                  });
                }
              };

              // Read file as text (works for both JSON and CSV)
              reader.readAsText(file);
            }}
          >
            Import
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
