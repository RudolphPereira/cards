import { InputLabel } from "@/components/form/InputLabel";
import ActionBtn from "@/components/buttons/ActionBtn";
import { Levels } from "@/components/Levels";
import { SelectDate } from "@/components/SelectDate";
import { SelectTime } from "@/components/SelectTime";
import { FadeIn } from "../animations/FadeIn";
import { Check, X } from "lucide-react";
import CircleBtn from "../buttons/CircleBtn";
import { Input } from "@/components/ui/input";
import { useTodo } from "@/context/TodoContext";

type Props = {};

function Form({}: Props) {
  const {
    newTodo,
    setNewTodo,
    priority,
    setPriority,
    complexity,
    setComplexity,
    calendarDate,
    setCalendarDate,
    time,
    setTime,
    setNewSubTask,
    newSubTask,
    addSubTask,
    subTasks,
    handleDeleteSubTask,
    newTag,
    setNewTag,
    handleOnSubmit,
  }: any = useTodo();

  return (
    <form
      onSubmit={handleOnSubmit}
      onKeyDown={(e) => {
        e.key === "Enter" && e.preventDefault();
      }}
      className="formBox flex flex-col gap-6 "
    >
      <FadeIn delayNum={0.1}>
        <div className="nameBox flex flex-col gap-3 w-full">
          <InputLabel title="Card Name" htmlFor="cardName" />
          <div
            className={`flex items-center gap-1 bg-white border border-gray-300 rounded-full searchForm w-[100%] h-14 group/search  group-focus/search  group/right-btn group-focus/right-btn`}
          >
            <Input
              type="text"
              className={`pl-[1rem]  w-[100%] h-[100%] outline-0 border-0 caret-mid-blue focus-visible:ring-0 shadow-none placeholder:text-base`}
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
              className={`flex items-center gap-1 bg-white border border-gray-300 rounded-full searchForm w-[100%] h-14 group/search  group-focus/search  group/right-btn group-focus/right-btn`}
            >
              <Input
                type="text"
                className={`pl-[1rem]  w-[100%] h-[100%] outline-0 border-0 caret-mid-blue focus-visible:ring-0 shadow-none placeholder:text-base`}
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

          <div
            className={`flex items-center gap-1 bg-white border border-gray-300 rounded-full searchForm w-[100%] h-14 group/search  group-focus/search  group/right-btn group-focus/right-btn`}
          >
            <Input
              type="text"
              className={`pl-[1rem]  w-[100%] h-[100%] outline-0 border-0 caret-mid-blue focus-visible:ring-0 shadow-none placeholder:text-base`}
              placeholder="Add Sub Task"
              id="subTask"
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
          <div
            className={`flex items-center gap-1 bg-white border border-gray-300 rounded-full searchForm w-[100%] h-14 group/search  group-focus/search  group/right-btn group-focus/right-btn`}
          >
            <Input
              type="text"
              className={`pl-[1rem]  w-[100%] h-[100%] outline-0 border-0 caret-mid-blue focus-visible:ring-0 shadow-none placeholder:text-base`}
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
