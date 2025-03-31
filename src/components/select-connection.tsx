import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useQueryStore from "@/store/queryStore";

export function SelectConnection() {
  const { connections, selectedConnection, setSelectedConnection } =
    useQueryStore();
  return (
    <Select
      onValueChange={(value) => {
        setSelectedConnection(value);
      }}
      value={selectedConnection || ""}
    >
      <SelectTrigger className="w-[180px] border-[#585858]">
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
