import { Link } from "react-router";
import { ArrowLeft, Pencil } from "lucide-react";
import CircleBtn from "@/components/CircleBtn";
import { TaskCard } from "@/components/TaskCard";
import InputPill from "@/components/InputPill";
import { Title } from "@/components/Title";
import { Check, RefreshCcw, OctagonX } from "lucide-react";
import ActionBtn from "@/components/ActionBtn";
import { ProgressBar } from "@/components/ProgressBar";

type Props = {};

function TaskDetail({}: Props) {
  return (
    <div className="taskDetail flex flex-col gap-8">
      <div className="titleBox flex items-center justify-center relative">
        <div className="backBtnBox absolute left-0">
          <Link to={"/"}>
            <CircleBtn
              icon={<ArrowLeft />}
              additionalClassForCirBtn="hover:bg-mid-blue"
            />
          </Link>
        </div>
        <h1 className="text-3xl w-[100%] text-center font-medium">
          Card Details
        </h1>

        <div className="editBtnBox absolute right-0">
          <Link to={"/EditTask"}>
            <CircleBtn
              icon={<Pencil />}
              additionalClassForCirBtn="hover:bg-mid-blue"
            />
          </Link>
        </div>
      </div>

      <div className="formBox flex flex-col gap-6">
        <div className="nameBox flex flex-col gap-3">
          <TaskCard ProgressBar={ProgressBar} />
        </div>

        <div className="subTaskBox flex flex-col gap-3">
          <Title title="Tasks In Your Card" />

          <InputPill
            placeHolder="Add task"
            additionalClassForInput="pl-[1rem]"
            additionalClassForCirBtn={`hover:bg-emerald-600`}
            rightIcon={<Check />}
          />

          <InputPill
            placeHolder="Add task"
            additionalClassForInput="pl-[1rem]"
            additionalClassForCirBtn={`hover:bg-emerald-600`}
            rightIcon={<Check />}
          />
        </div>

        <div className="submitBox flex flex-col gap-4 items-center justify-center">
          <ActionBtn
            btnClass={`hover:bg-mid-blue`}
            text="Repeat Tasks"
            icon={
              <RefreshCcw className="transition-all duration-300 ease-in-out group-hover:rotate-180 text-white scale-80" />
            }
          />

          <ActionBtn
            btnClass={`hover:bg-dark-red`}
            text="Delete Tasks"
            icon={
              <OctagonX className="transition-all duration-300 ease-in-out group-hover:rotate-90 text-white scale-80" />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
