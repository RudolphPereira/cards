import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

interface Options {
  value: string;
  label: string;
}

export function Levels() {
  let options: Options[] = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  return (
    <RadioGroup
      defaultValue="1"
      className="flex items-center justify-between gap-0"
    >
      {options.map((option) => (
        <div
          className="radioItem aspect-square w-[40px] h-[40px] relative rounded-full flex justify-center items-center"
          key={option.value}
        >
          <RadioGroupItem
            key={option.value}
            value={option.value}
            className="peer aspect-square w-[30px] h-[30px] [&_svg]:fill-none [&_svg]:stroke-0  border-0  data-[state=checked]:bg-dark-blue bg-mid-blue/20 cursor-pointer transition-all duration-150 ease-in-out active:scale-95 pointer-events-auto hover:bg-dark-blue"
          />
          <Label className="absolute w-[30px] h-[30px] flex justify-center items-center pointer-events-none peer-data-[state=checked]:text-whitesmoke peer-hover:text-whitesmoke transition-all duration-150 ease-in-out">
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
