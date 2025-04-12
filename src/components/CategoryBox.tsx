import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTodo } from "@/context/TodoContext";

type Props = {};

export default function CategoryBox({}: Props) {
  const { todos, selectedTags, setSelectedTags }: any = useTodo();

  const handleTagChange = (tag: string, checked: boolean) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((t: any) => t !== tag));
    }
  };

  // Create Arr to map
  const todoTags = todos
    .map((todo: any) => todo.tags)
    .flat()
    .map((item: any) => item[0]);

  const uniArr = [...new Set(todoTags)];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full">
        <Button className="bg-white  flex items-center justify-between rounded-full shadow-none w-full p-5 text-[0.9rem] text-dark-blue hover:bg-white border border-gray-300">
          Category
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white categoryDropDown border-0 rounded-2xl p-3 flex gap-2.5 flex-col min-w-[13rem] max-h-[311.6px]">
        {uniArr.map((item: any) => {
          return (
            <div key={item}>
              <DropdownMenuCheckboxItem
                className="w-full text-[0.8rem]"
                onCheckedChange={(checked) => handleTagChange(item, checked)}
                checked={selectedTags.includes(item)}
                onSelect={(e) => e.preventDefault()}
              >
                {item}
              </DropdownMenuCheckboxItem>
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
