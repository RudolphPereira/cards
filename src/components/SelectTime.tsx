import { Clock } from "lucide-react";
import { Input } from "./ui/input";
type Props = {
  value: string;
  handleGetValue: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
};

export function SelectTime({ value, handleGetValue, id }: Props) {
  return (
    <div className="timeBox flex justify-center h-[50px] bg-white rounded-full relative border border-gray-300">
      <Input
        required
        id={id}
        value={value}
        onChange={handleGetValue}
        type="time"
        className="h-[50px] w-[100%] flex px-[1rem] focus-visible:ring-0
        outline-none text-dark-blue text-base cursor-none border-0 shadow-none outline-0"
      />
      <div className="iconBox absolute w-[100%] h-[100%] flex items-center justify-end pointer-events-none">
        <Clock className="mr-3 scale-90" />
      </div>
    </div>
  );
}
