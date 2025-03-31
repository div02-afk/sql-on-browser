import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useQueryStore from "@/store/queryStore";
import { Plus } from "lucide-react";
import { useState } from "react";

export function NewConnectionDialog() {
  const { addConnection } = useQueryStore();
  const [connectionDetails, setConnectionDetails] = useState({
    name: "",
    host: "",
    port: "5432", // Default PostgreSQL port
    username: "",
    password: "",
    database: "",
  });

  const handleInputChange = (
    field: keyof typeof connectionDetails,
    value: string
  ) => {
    setConnectionDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="gap-1 w-full cursor-pointer border-[#585858]  hover:bg-[#cacaca]"
        >
          Add Connection
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#0e0e0e] border-[#585858] text-[#cacaca]">
        <DialogHeader>
          <DialogTitle className="text-[#cacaca]">
            Add New Database Connection
          </DialogTitle>
          <DialogDescription className="text-[#585858]">
            Configure your database connection details below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="connection-name"
              className="text-right text-[#585858]"
            >
              Name
            </Label>
            <Input
              id="connection-name"
              value={connectionDetails.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="col-span-3 bg-[#0e0e0e] text-[#cacaca] border-[#585858]"
              placeholder="My Database"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="host" className="text-right text-[#585858]">
              Host
            </Label>
            <Input
              id="host"
              value={connectionDetails.host}
              onChange={(e) => handleInputChange("host", e.target.value)}
              className="col-span-3 bg-[#0e0e0e] text-[#cacaca] border-[#585858]"
              placeholder="localhost"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="port" className="text-right text-[#585858]">
              Port
            </Label>
            <Input
              id="port"
              value={connectionDetails.port}
              onChange={(e) => handleInputChange("port", e.target.value)}
              className="col-span-3 bg-[#0e0e0e] text-[#cacaca] border-[#585858]"
              placeholder="5432"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="database" className="text-right text-[#585858]">
              Database
            </Label>
            <Input
              id="database"
              value={connectionDetails.database}
              onChange={(e) => handleInputChange("database", e.target.value)}
              className="col-span-3 bg-[#0e0e0e] text-[#cacaca] border-[#585858]"
              placeholder="my_database"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right text-[#585858]">
              Username
            </Label>
            <Input
              id="username"
              value={connectionDetails.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              className="col-span-3 bg-[#0e0e0e] text-[#cacaca] border-[#585858]"
              placeholder="admin"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right text-[#585858]">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={connectionDetails.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="col-span-3 bg-[#0e0e0e] text-[#cacaca] border-[#585858]"
              placeholder="••••••••"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={
              connectionDetails.name === "" ||
              connectionDetails.host === "" ||
              connectionDetails.port === "" ||
              connectionDetails.database === "" ||
              connectionDetails.username === "" ||
              connectionDetails.password === ""
            }
            onClick={() => {
              addConnection({
                ...connectionDetails,
                id: "1",
              });
              alert("Connection added successfully!");
            }}
            type="submit"
            className="bg-[#cacaca] text-[#0e0e0e] hover:bg-[#6b6b6b]"
          >
            Save Connection
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
