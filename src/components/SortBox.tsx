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

export function SortBox() {
  const { sortValue, setSortValue, sortedTodos }: any = useTodo();

  const sortArrLabels: Array<string> = [
    "Custom",
    "Default",
    "Ascending Date",
    "Descending Date",
    "Ascending Complexity",
    "Descending Complexity",
    "Ascending Priority",
    "Descending Priority",
  ];

  if (sortValue === "Ascending Priority") {
    sortedTodos.sort((a: any, b: any) => a.priority - b.priority);
  } else if (sortValue === "Descending Priority") {
    sortedTodos.sort((a: any, b: any) => b.priority - a.priority);
  } else if (sortValue === "Ascending Complexity") {
    sortedTodos.sort((a: any, b: any) => a.complexity - b.complexity);
  } else if (sortValue === "Descending Complexity") {
    sortedTodos.sort((a: any, b: any) => b.complexity - a.complexity);
  } else if (sortValue === "Ascending Date") {
    sortedTodos.sort(
      (a: any, b: any) => +new Date(a.dateSelected) - +new Date(b.dateSelected)
    );
  } else if (sortValue === "Descending Date") {
    sortedTodos.sort(
      (a: any, b: any) => +new Date(b.dateSelected) - +new Date(a.dateSelected)
    );
  }

  sortedTodos.reverse();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-white flex items-center justify-between rounded-full shadow-none w-full p-5 text-[0.9rem] text-dark-blue hover:bg-white border border-gray-300">
          Sort
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-0 rounded-2xl p-3 min-w-[13rem]">
        <DropdownMenuRadioGroup
          defaultValue={"Default"}
          value={sortValue}
          onValueChange={setSortValue}
          className="flex gap-2.5 flex-col"
        >
          {sortArrLabels.map((item) => (
            <DropdownMenuRadioItem
              key={item}
              className="w-full text-[0.8rem]"
              value={item}
            >
              {item}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
