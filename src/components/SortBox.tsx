import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTodo } from "@/context/TodoContext";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function SortBox() {
  const { sortCards }: any = useTodo();

  const [sortValue, setSortValue] = useState("Default");

  useEffect(() => {
    sortCards(sortValue);
  }, [sortValue]);

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
        <Button className="bg-white cursor-pointer flex items-center justify-between rounded-full shadow-none w-full p-5 text-[0.9rem] text-dark-blue hover:bg-white border border-gray-300">
          Sort
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-0 rounded-2xl p-3  min-w-[13rem]">
        <DropdownMenuRadioGroup
          value={sortValue}
          onValueChange={setSortValue}
          className="flex gap-2.5 flex-col"
        >
          {sortArr.map((item) => (
            <DropdownMenuRadioItem
              key={item}
              className="w-full text-[0.8rem]"
              value={item}
              onSelect={(e) => e.preventDefault()}
            >
              {item}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
