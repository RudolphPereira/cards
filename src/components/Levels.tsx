import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTodo } from "@/context/TodoContext";

type Props = {
  checkedNum: number;
  handleGetValue?: React.MouseEventHandler<HTMLButtonElement>;
  id: string;
};

interface LevelOptions {
  value: string;
}

export function Levels({ handleGetValue, checkedNum, id }: Props) {
  const optionsLevel: LevelOptions[] = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "10" },
  ];

  return (
    <RadioGroup
      defaultValue="1"
      className="flex items-center justify-start gap-0 flex-wrap sm:justify-between w-[100%]"
    >
      {optionsLevel.map((option: any) => (
        <div
          className="radioItem aspect-square w-[40px] h-[40px] relative rounded-full flex justify-center items-center"
          key={option.value}
        >
          <RadioGroupItem
            id={id}
            onClick={handleGetValue}
            checked={checkedNum.toString() === option.value}
            key={option.value}
            value={option.value}
            className="peer aspect-square w-[30px] h-[30px] [&_svg]:fill-none [&_svg]:stroke-0  border-0  data-[state=checked]:bg-dark-blue bg-mid-blue/20 cursor-pointer transition-all duration-150 ease-in-out active:scale-95 pointer-events-auto hover:bg-dark-blue"
          />
          <Label className="absolute w-[30px] h-[30px] flex justify-center items-center pointer-events-none peer-data-[state=checked]:text-whitesmoke peer-hover:text-whitesmoke transition-all duration-150 ease-in-out">
            {option.value}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
