import CircleBtn from "@/components/CircleBtn";
import InputPill from "@/components/InputPill";
import { Title } from "@/components/Title";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Check, X } from "lucide-react";
import ActionBtn from "@/components/ActionBtn";
import { Levels } from "@/components/Levels";
import { SelectDate } from "@/components/SelectDate";
import { SelectTime } from "@/components/SelectTime";

type Props = {};

function NewTask({}: Props) {
  return (
    <div className="newTask flex flex-col gap-8">
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
          Add New Card
        </h1>
      </div>
      <div className="formBox flex flex-col gap-6">
        <div className="nameBox flex flex-col gap-3">
          <Title title="Card Name" />
          <InputPill
            placeHolder="Name your card"
            additionalClassForInput="pl-[1rem]"
            id="hello"
          />
        </div>
        <div className="priorityBox flex flex-col gap-3">
          <Title title="Select Priority level" />
          <Levels />
        </div>
        <div className="complexityBox flex flex-col gap-3">
          <Title title="Select Complexity level" />
          <Levels />
        </div>
        <div className="dateTimeBox flex gap-3">
          <div className="dateBox flex-1 flex flex-col gap-3">
            <Title title="Select Due Date" />
            <SelectDate />
          </div>

          <div className="timeBox flex-1 flex flex-col gap-3">
            <Title title="Select Time" />
            <SelectTime />
          </div>
        </div>
        <div className="subTaskBox flex flex-col gap-3">
          <Title title="Add Tasks To Your Card" />

          <InputPill
            placeHolder="Add task"
            additionalClassForInput="pl-[1rem]"
            additionalClassForCirBtn={`hover:bg-dark-red`}
            rightIcon={<X />}
          />

          <InputPill
            placeHolder="Add task"
            additionalClassForInput="pl-[1rem]"
            additionalClassForCirBtn={`hover:bg-emerald-600`}
            rightIcon={<Check />}
          />
        </div>
        <div className="tagBox flex flex-col gap-3">
          <Title title="Add Tags" />
          <InputPill
            placeHolder="Separate tags with a comma"
            additionalClassForInput="pl-[1rem]"
          />
        </div>
        <div className="submitBox">
          <Link to={"/"}>
            <ActionBtn text="Save Card" btnClass={`hover:bg-mid-blue`} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewTask;
