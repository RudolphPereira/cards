import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronDown } from "lucide-react";

export function SortBox() {
  const [position, setPosition] = React.useState("bottom");

  const sortArr: Array<string> = [
    "Default",
    "Ascending Date",
    "Descending Date",
    "Ascending Complexity",
    "Descending Complexity",
    "Ascending Priority",
    "Descending Priority",
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-white cursor-pointer flex items-center justify-between rounded-full shadow-none w-full p-5 text-[0.9rem]">
          Sort
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-white border-0 rounded-2xl p-4 min-w-[13rem]">
        <RadioGroup value={position} onValueChange={setPosition}>
          {sortArr.map((item) => (
            <div
              key={item}
              className=" flex items-center justify-between flex-row-reverse gap-2.5 border-b-1 border-gray-300 pb-2.5 last:border-0 last:pb-0 "
            >
              <RadioGroupItem
                value={item}
                id={item}
                className=" text-gray-300 border-2 border-gray-400 [&_svg]:fill-mid-blue cursor-pointer data-[state=checked]:border-mid-blue peer data-[state=checked]:drop-shadow-lg"
              />
              <Label
                htmlFor={item}
                className=" cursor-pointer text-gray-500 transition-all ease-in-out duration-75 hover:text-mid-blue font-normal peer-data-[state=checked]:text-mid-blue text-[0.8rem] w-full peer-data-[state=checked]:font-semibold"
              >
                {item}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
