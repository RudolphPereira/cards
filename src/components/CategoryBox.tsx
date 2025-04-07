import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTodo } from "@/context/TodoContext";
import { useState } from "react";

type Props = {};

export default function CategoryBox({}: Props) {
  const { todos, setTodos }: any = useTodo();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagChange = (tag: string, checked: boolean) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    }

    const updatedTodos = todos.map((todo: any) => {
      if (selectedTags.length > 0) {
        if (todo.tags.some((tag: any) => selectedTags.includes(tag))) {
          return todo;
        }
      }
    });

    console.log(updatedTodos);
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
        <Button className="bg-white cursor-pointer flex items-center justify-between rounded-full shadow-none w-full p-5 text-[0.9rem] text-dark-blue hover:bg-white border border-gray-300">
          Category
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white categoryDropDown border-0 rounded-2xl p-3 flex gap-2.5 flex-col min-w-[13rem]">
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
