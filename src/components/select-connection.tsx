
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { connections } from "@/constants";

export function SelectConnection() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Connection" />
      </SelectTrigger>
      <SelectContent className="bg-[#0e0e0e] text-[#585858]">
        <SelectGroup>
          <SelectLabel>Connections</SelectLabel>
          {connections.map((connection, i) => (
            <SelectItem value={connection.name} key={i}>
              {connection.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
