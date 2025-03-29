import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export function CategoryBox() {
  const categoryArr: Array<string> = [
    "Hello",
    "Hi there",
    "What you doing",
    "Good evening",
    "jesus",
    "lets, go",
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full">
        <Button className="bg-white cursor-pointer flex items-center justify-between rounded-full shadow-none w-full p-5 text-[0.9rem] text-dark-blue hover:bg-white border border-gray-300">
          Category
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-white border-0 rounded-2xl p-4 flex gap-2.5 flex-col min-w-[13rem]">
        {categoryArr.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between flex-row-reverse gap-2.5 border-b-1 border-gray-300 pb-2.5 last:border-0 last:pb-0 "
          >
            <Checkbox
              id={item}
              className="rounded-full border-gray-400 border-1 data-[state=checked]:bg-mid-blue data-[state=checked]:border-mid-blue data-[state=checked]:text-white data-[state=checked]:drop-shadow-lg cursor-pointer"
            />
            <Label
              htmlFor={item}
              className=" cursor-pointer text-gray-500 transition-all ease-in-out duration-75 hover:text-mid-blue font-normal peer-data-[state=checked]:text-mid-blue text-[0.8rem] w-full peer-data-[state=checked]:font-semibold"
            >
              {item}
            </Label>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
