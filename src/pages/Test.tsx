import { Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { v4 as uid } from "uuid";
import { useState, useEffect, FormEvent } from "react";
import { formatTime, createCleanArr } from "@/lib/utils";

import { useTodo } from "@/context/TodoContext";

interface Props {}

interface LevelOptions {
  value: string;
}

interface Card {
  id: string;
  title: string;
  priority: number;
  complexity: number;
  dateSelected: Date | undefined;
  timeSelected: string;
  subTasks: Array<SubTasks>;
  tags: Array<Tags>;
  completed: boolean;
}

interface SubTasks {
  id: string;
  title: string;
  completed?: boolean;
}

interface Tags {}

export function Test({}: Props) {
  const [todos, setTodos] = useState<Card[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [priority, setPriorty] = useState<number>(1);
  const [complexity, setComplexity] = useState<number>(1);
  const [calendarDate, setcalendarDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [subTasks, setSubTasks] = useState<SubTasks[]>([]);
  const [newSubTask, setNewSubTask] = useState<string>("");
  const [tagList, setTagList] = useState<Tags[]>([]);
  const [newTag, setNewTag] = useState<string>("");

  const options: LevelOptions[] = [
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

  useEffect(() => {
    setTagList(createCleanArr(newTag));
  }, [newTag]);

  const addTodo = () => {
    if (newTodo !== "") {
      const todoId = uid();
      const newTodoItem: Card = {
        id: todoId,
        title: newTodo,
        priority: priority,
        complexity: complexity,
        dateSelected: calendarDate,
        timeSelected: formatTime(time),
        subTasks: subTasks,
        tags: tagList,
        completed: false,
      };

      setTodos([...todos, newTodoItem]);
      setNewTodo("");
      setPriorty(1);
      setComplexity(1);
      setcalendarDate(undefined);
      setTime("");
      setNewSubTask("");
      setSubTasks([]);
      setNewTag("");
    }
  };

  const addSubTask = () => {
    if (newSubTask !== "") {
      const subTaskId = uid();
      const newSubTaskItem: SubTasks = {
        id: subTaskId,
        title: newSubTask,
        completed: false,
      };
      setSubTasks([...subTasks, newSubTaskItem]);
      setNewSubTask("");
    }
  };

  const handleonSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo();
  };

  const handleDeleteSubTask = (id: string) => {
    const updatedSubTasks = subTasks.filter((subTask) => subTask.id !== id);
    setSubTasks(updatedSubTasks);
  };

  console.log(useTodo());

  return (
    <div className="test">
      <form className="flex flex-col gap-4" onSubmit={(e) => handleonSubmit(e)}>
        <div className="inputBox">
          <Label htmlFor="cardName" className="mb-3">
            Card Name
          </Label>
          <Input
            type="text"
            placeholder="Card Name"
            id="cardName"
            onChange={(e) => setNewTodo(e.target.value)}
            required
            value={newTodo}
          />
        </div>

        <div className="inputBox">
          <Label htmlFor="priority" className="mb-3">
            Select Priority level
          </Label>
          <RadioGroup
            defaultValue="1"
            className="flex items-center justify-start gap-0 flex-wrap sm:justify-between w-[100%]"
          >
            {options.map((option) => (
              <div
                className="radioItem aspect-square w-[40px] h-[40px] relative rounded-full flex justify-center items-center"
                key={option.value}
              >
                <RadioGroupItem
                  onClick={(e) => setPriorty(Number(e.currentTarget.value))}
                  key={option.value}
                  value={option.value}
                  checked={priority.toString() === option.value}
                  className="peer aspect-square w-[30px] h-[30px] [&_svg]:fill-none [&_svg]:stroke-0  border-0  data-[state=checked]:bg-dark-blue bg-mid-blue/20 cursor-pointer transition-all duration-150 ease-in-out active:scale-95 pointer-events-auto hover:bg-dark-blue"
                />
                <Label className="absolute w-[30px] h-[30px] flex justify-center items-center pointer-events-none peer-data-[state=checked]:text-whitesmoke peer-hover:text-whitesmoke transition-all duration-150 ease-in-out">
                  {option.value}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="inputBox">
          <Label htmlFor="complexity" className="mb-3">
            Select Complexity level
          </Label>
          <RadioGroup
            id="complexity"
            defaultValue="1"
            className="flex items-center justify-start gap-0 flex-wrap sm:justify-between w-[100%]"
          >
            {options.map((option) => (
              <div
                className="radioItem aspect-square w-[40px] h-[40px] relative rounded-full flex justify-center items-center"
                key={option.value}
              >
                <RadioGroupItem
                  onClick={(e) => setComplexity(Number(e.currentTarget.value))}
                  key={option.value}
                  value={option.value}
                  checked={complexity.toString() === option.value}
                  className="peer aspect-square w-[30px] h-[30px] [&_svg]:fill-none [&_svg]:stroke-0  border-0  data-[state=checked]:bg-dark-blue bg-mid-blue/20 cursor-pointer transition-all duration-150 ease-in-out active:scale-95 pointer-events-auto hover:bg-dark-blue"
                />
                <Label className="absolute w-[30px] h-[30px] flex justify-center items-center pointer-events-none peer-data-[state=checked]:text-whitesmoke peer-hover:text-whitesmoke transition-all duration-150 ease-in-out">
                  {option.value}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="inputBox w-full">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={cn(
                  "justify-between w-full text-left font-normal bg-white border  border-gray-300 text-dark-blue rounded-full cursor-pointer py-3 shadow-none hover:bg-white pl-6 text-base h-[50px]",
                  !calendarDate && "text-muted-foreground"
                )}
              >
                {calendarDate ? (
                  format(calendarDate, "PPP")
                ) : (
                  <span className="pl-[.3rem] text-dark-blue/60 text-base flex-2">
                    Select Date
                  </span>
                )}
                <CalendarIcon className="aspect-square h-[24px] scale-125 mr-1 text-dark-blue" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 border-0 rounded-2xl">
              <Calendar
                mode="single"
                selected={calendarDate}
                initialFocus
                className=" border-0 rounded-2xl"
                showOutsideDays
                fromDate={new Date()}
                onSelect={setcalendarDate}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="inputBox">
          <div className="timeBox flex justify-center h-[50px] bg-white rounded-full relative border border-gray-300">
            <input
              onChange={(e) => setTime(e.target.value)}
              type="time"
              value={time}
              className="h-[50px] w-[100%] flex px-[1rem]
        outline-none text-dark-blue text-base cursor-pointer"
            />
            <div className="iconBox absolute w-[100%] h-[100%] flex items-center justify-end pointer-events-none">
              <Clock className="mr-3 scale-90" />
            </div>
          </div>
        </div>

        <div className="subTaskBox">
          <ol className="flex gap-2 flex-col">
            {subTasks.map((subTask) => (
              <li
                key={subTask.id}
                className="flex gap-2 items-center w-full justify-between p-1.5 bg-white rounded"
              >
                {subTask.title}
                <button
                  onClick={() => handleDeleteSubTask(subTask.id)}
                  type="button"
                  className="bg-red-500 text-white px-2 py-1 text-sm rounded cursor-pointer"
                >
                  Delete
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="inputBox">
          <Label htmlFor="subTask" className="mb-3">
            Add Task
          </Label>
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Add Sub Task"
              id="subTask"
              onChange={(e) => setNewSubTask(e.target.value)}
              value={newSubTask}
            />
            <button
              type="button"
              className="p-1.5 bg-emerald-600 rounded text-white cursor-pointer"
              onClick={() => addSubTask()}
            >
              Add
            </button>
          </div>
        </div>

        <div className="inputBox">
          <Label htmlFor="tags" className="mb-3">
            Add Tags
          </Label>
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Add Tags"
              id="tags"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}
