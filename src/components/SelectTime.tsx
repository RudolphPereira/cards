import { Clock } from "lucide-react";
type Props = {};

export function SelectTime({}: Props) {
  return (
    <div className="timeBox flex justify-center h-[50px] bg-white rounded-full relative border border-gray-300">
      <input
        type="time"
        value="00:00"
        className="h-[100%] w-[100%] flex px-[1rem]
        outline-none text-dark-blue text-base cursor-pointer"
      />
      <div className="iconBox absolute w-[100%] h-[100%] flex items-center justify-end pointer-events-none">
        <Clock className="mr-3 scale-90" />
      </div>
    </div>
  );
}
