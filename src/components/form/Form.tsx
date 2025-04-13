import { useState, useEffect, FormEvent } from "react";
import { InputLabel } from "@/components/form/InputLabel";
import ActionBtn from "@/components/buttons/ActionBtn";
import { Levels } from "@/components/Levels";
import { SelectDate } from "@/components/SelectDate";
import { SelectTime } from "@/components/SelectTime";
import { FadeIn } from "../animations/FadeIn";
import { Check, X } from "lucide-react";
import CircleBtn from "../buttons/CircleBtn";
import { Input } from "@/components/ui/input";
import { createCleanArr, generateTagBgColor } from "@/lib/utils";
import { useTodo } from "@/context/TodoContext";
import { v4 as uid } from "uuid";

type Props = {
  todo?: any;
};

interface SubTasks {
  id: string;
  title: string;
  completed?: boolean;
}

interface Tags {}

function Form({ todo }: Props) {
  // Context
  const { setSearchValue, addTodo, editTodo }: any = useTodo();

  // States
  const [newTodo, setNewTodo] = useState<string>(todo ? todo.title : "");
  const [priority, setPriority] = useState<number>(todo ? todo.priority : 1);
  const [complexity, setComplexity] = useState<number>(
    todo ? todo.complexity : 1
  );
  const [calendarDate, setCalendarDate] = useState<Date | undefined>(
    todo ? todo.dateSelected : undefined
  );
  const [time, setTime] = useState<string>(todo ? todo.timeSelected : "");
  const [subTasks, setSubTasks] = useState<SubTasks[]>(
    todo ? todo.subTasks : []
  );
  const [newSubTask, setNewSubTask] = useState<string>("");
  const [tagList, setTagList] = useState<Tags[]>([]);
  const [newTag, setNewTag] = useState<string>(todo ? todo.tagsString : "");

  // Functions

  // Set Tag colors

  const tagArr = createCleanArr(newTag);

  const cleanTagsString = tagArr.join(", ");

  const colorsTagArr = tagArr.map(() => {
    const colors = generateTagBgColor();
    return colors;
  });

  const tagsWithColorsArr = tagArr.map((tag, index) => {
    return [tag, colorsTagArr[index]];
  });

  useEffect(() => {
    setTagList(tagsWithColorsArr);
  }, [newTag]);

  useEffect(() => {
    if (newTag === "" && tagList.length === 0) {
      const unTaggedItem: string[] = ["untagged", "bg-dark-blue/25"];
      setTagList([...tagList, unTaggedItem]);
    }
  }, [tagList]);

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

  const handleDeleteSubTask = (id: string) => {
    const updatedSubTasks = subTasks.filter((subTask) => subTask.id !== id);
    setSubTasks(updatedSubTasks);
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todo) {
      if (newTodo !== "") {
        addTodo(
          newTodo,
          priority,
          complexity,
          calendarDate,
          time,
          subTasks,
          tagList,
          cleanTagsString
        );
      }
    } else {
      editTodo(
        todo.id,
        newTodo,
        priority,
        complexity,
        calendarDate,
        time,
        subTasks,
        tagList,
        cleanTagsString
      );
    }

    setTagList(tagsWithColorsArr);
    setNewTodo("");
    setPriority(1);
    setComplexity(1);
    setCalendarDate(undefined);
    setTime("");
    setNewSubTask("");
    setSubTasks([]);
    setNewTag("");
    setTagList([]);
    setSearchValue("");
  };

  useEffect(() => {
    if (todo) {
      const allSubTasksCompletedValue = todo.subTasks.every((subTask: any) => {
        return subTask.completed;
      });

      if (allSubTasksCompletedValue) {
        todo.completed = true;
      } else {
        todo.completed = false;
      }

      if (todo.subTasks.length === 0) {
        todo.completed = false;
      }
    }
  }, [handleOnSubmit]);

  return (
    <form
      onSubmit={handleOnSubmit}
      onKeyDown={(e) => {
        e.key === "Enter" && e.preventDefault();
      }}
      className="formBox flex flex-col gap-6"
    >
      <FadeIn delayNum={0.1}>
        <div className="nameBox flex flex-col gap-3 w-full">
          <InputLabel title="Card Name" htmlFor="cardName" />
          <div className="flex items-center gap-1 bg-white border border-gray-300 rounded-full searchForm w-[100%] h-14 group/search group-focus/search group/right-btn group-focus/right-btn">
            <Input
              type="text"
              className="pl-[1rem] w-[100%] h-[100%] outline-0 border-0 caret-mid-blue focus-visible:ring-0 shadow-none placeholder:text-base"
              placeholder="Name your card"
              value={newTodo}
              id="cardName"
              onChange={(e) => setNewTodo(e.target.value)}
              required
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn delayNum={0.2}>
        <div className="priorityBox flex flex-col gap-3 w-full">
          <InputLabel title="Select Priority level" htmlFor="priority" />
          <Levels
            handleGetValue={(e) => setPriority(Number(e.currentTarget.value))}
            checkedNum={priority}
            id="priority"
          />
        </div>
      </FadeIn>

      <FadeIn delayNum={0.3}>
        <div className="complexityBox flex flex-col gap-3 w-full">
          <InputLabel title="Select Complexity level" htmlFor="complexity" />
          <Levels
            handleGetValue={(e) => setComplexity(Number(e.currentTarget.value))}
            checkedNum={complexity}
            id="complexity"
          />
        </div>
      </FadeIn>

      <div className="dateTimeBox flex gap-3">
        <FadeIn delayNum={0.4}>
          <div className="dateBox flex-1 flex flex-col gap-3 w-full">
            <InputLabel title="Select Due Date" htmlFor="date" />
            <SelectDate
              date={calendarDate}
              setDate={setCalendarDate}
              id="date"
            />
          </div>
        </FadeIn>

        <FadeIn delayNum={0.5}>
          <div className="timeBox flex-1 flex flex-col gap-3 w-full">
            <InputLabel title="Select Time" htmlFor="time" />
            <SelectTime
              id="time"
              value={time}
              handleGetValue={(e) => setTime(e.target.value)}
            />
          </div>
        </FadeIn>
      </div>

      <FadeIn delayNum={0.6}>
        <div className="subTaskBox flex flex-col gap-3 w-full">
          <InputLabel title="Add Tasks To Your Card" htmlFor="subTask" />
          {subTasks.map((subTask: any) => (
            <div
              key={subTask.id}
              className="flex items-center gap-1 bg-white border border-gray-300 rounded-full w-[100%] h-14 group/search group-focus/search group/right-btn group-focus/right-btn"
            >
              <Input
                type="text"
                className="pl-[1rem] w-[100%] h-[100%] outline-0 border-0 caret-mid-blue focus-visible:ring-0 shadow-none placeholder:text-base"
                value={subTask.title}
                readOnly
              />
              <CircleBtn
                icon={<X />}
                additionalClassForCirBtn={`hover:bg-dark-red`}
                handleClickEvent={() => handleDeleteSubTask(subTask.id)}
              />
            </div>
          ))}

          <div className="flex items-center gap-1 bg-white border border-gray-300 rounded-full w-[100%] h-14 group/search group-focus/search group/right-btn group-focus/right-btn">
            <Input
              type="text"
              className="pl-[1rem] w-[100%] h-[100%] outline-0 border-0 caret-mid-blue focus-visible:ring-0 shadow-none placeholder:text-base"
              placeholder="Add Sub Task"
              onChange={(e) => setNewSubTask(e.target.value)}
              value={newSubTask}
              onKeyDown={(e) => {
                e.key === "Enter" && addSubTask();
              }}
            />
            <CircleBtn
              icon={<Check />}
              additionalClassForCirBtn={`hover:bg-emerald-600`}
              handleClickEvent={addSubTask}
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn delayNum={0.7}>
        <div className="tagBox flex flex-col gap-3 w-full">
          <InputLabel title="Add Tags" htmlFor="tags" />
          <div className="flex items-center gap-1 bg-white border border-gray-300 rounded-full searchForm w-[100%] h-14 group/search  group-focus/search  group/right-btn group-focus/right-btn">
            <Input
              type="text"
              className="pl-[1rem] w-[100%] h-[100%] outline-0 border-0 caret-mid-blue focus-visible:ring-0 shadow-none placeholder:text-base"
              placeholder="Separate tags with a comma"
              id="tags"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn delayNum={0.8}>
        <div className="submitBox flex justify-center w-full">
          <ActionBtn text="Save Card" btnClass={`hover:bg-mid-blue`} />
        </div>
      </FadeIn>
    </form>
  );
}

export default Form;
