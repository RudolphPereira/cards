import { TaskCard } from "@/components/TaskCard";
import { InputLabel } from "@/components/form/InputLabel";
import { Check, RefreshCcw, OctagonX } from "lucide-react";
import ActionBtn from "@/components/buttons/ActionBtn";
import { ProgressBar } from "@/components/progressBars/ProgressBar";
import { FadeIn } from "@/components/animations/FadeIn";
import PageTitleBox from "@/components/PageTitleBox";
import { Input } from "@/components/ui/input";
import CircleBtn from "../../components/buttons/CircleBtn";
import { useTodo } from "@/context/TodoContext";
import { useParams } from "react-router";
import NoData from "@/components/alert/NoData";

type Props = {};

function TaskDetail({}: Props) {
  const {
    getTodo,
    handleCompleteSubTask,
    handleRepeatSubTask,
    handleDeleteSavedSubTask,
  }: any = useTodo();

  const { id } = useParams();

  const todo = getTodo(id);

  return (
    <div className="taskDetail flex flex-col gap-8 px-4 py-4.5">
      <FadeIn delayNum={0}>
        <PageTitleBox title="Card Details" rightBtn={true} todoId={todo.id} />
      </FadeIn>

      <div className="formBox flex flex-col gap-6">
        <FadeIn delayNum={0.2}>
          <div className="cardBox flex flex-col gap-3 w-full items-center">
            <TaskCard ProgressBar={ProgressBar} todo={todo} />
          </div>
        </FadeIn>

        <FadeIn delayNum={0.3}>
          <div className="subTaskBox flex flex-col gap-3 w-full">
            {todo.subTasks.length !== 0 ? (
              <InputLabel title="Tasks In Your Card" />
            ) : (
              <NoData title="No Action Pending" desc="No Tasks In Your Card" />
            )}

            {todo.subTasks.map((subTask: any) => (
              <div
                key={subTask.id}
                className={`${
                  subTask.completed
                    ? `bg-emerald-600/20 border-emerald-600/20 shadow-xs`
                    : `bg-white border-gray-300`
                } flex items-center gap-1 border  rounded-full searchForm w-[100%] h-14 group/search  group-focus/search  group/right-btn group-focus/right-btn transition-all duration-200 ease-in-out`}
              >
                <Input
                  type="text"
                  className={`${
                    subTask.completed ? `line-through` : `no-underline`
                  } pl-[1rem] w-[100%] h-[100%] outline-0 border-0 caret-mid-blue focus-visible:ring-0 shadow-none placeholder:text-base`}
                  value={subTask.title}
                  readOnly
                />
                <CircleBtn
                  icon={<Check />}
                  additionalClassForCirBtn={`hover:bg-emerald-600 ${
                    subTask.completed ? `bg-emerald-600` : `bg-dark-blue`
                  }`}
                  handleClickEvent={() =>
                    handleCompleteSubTask(todo.id, subTask.id)
                  }
                />
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delayNum={0.4}>
          {todo.subTasks.length !== 0 ? (
            <div className="submitBox flex flex-col gap-4 items-center justify-center">
              <ActionBtn
                handleClickEvent={() => handleRepeatSubTask(todo.id)}
                btnClass={`hover:bg-mid-blue`}
                text="Repeat Tasks"
                icon={
                  <RefreshCcw className="transition-all duration-300 ease-in-out group-hover:rotate-180 text-white scale-80" />
                }
              />

              <ActionBtn
                handleClickEvent={() => handleDeleteSavedSubTask(todo.id)}
                btnClass={`hover:bg-dark-red`}
                text="Delete Tasks"
                icon={
                  <OctagonX className="transition-all duration-300 ease-in-out group-hover:rotate-90 text-white scale-80" />
                }
              />
            </div>
          ) : (
            <div className="submitBox flex flex-col gap-4 items-center justify-center"></div>
          )}
        </FadeIn>
      </div>
    </div>
  );
}

export default TaskDetail;
