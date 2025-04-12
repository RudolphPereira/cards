import CircleBtn from "@/components/buttons/CircleBtn";
import { ArrowLeft, Pencil } from "lucide-react";
import { Link } from "react-router";
import { useTodo } from "@/context/TodoContext";

type Props = {
  title: string;
  rightBtn?: boolean;
  todoId?: string;
};

function PageTitleBox({ title, rightBtn, todoId }: Props) {
  const { handleBack }: any = useTodo();
  return (
    <div className="titleBox flex items-center justify-center  w-full sticky top-0">
      <div className="backBtnBox absolute left-0 rounded-full">
        <CircleBtn
          handleClickEvent={handleBack}
          icon={<ArrowLeft />}
          additionalClassForCirBtn="hover:bg-mid-blue"
        />
      </div>
      <h1 className="text-3xl w-[100%] text-center font-medium">{title}</h1>

      {rightBtn && (
        <div className="editBtnBox absolute right-0 -mr-1.5">
          <Link to={`/EditTask/${todoId}`}>
            <CircleBtn
              icon={<Pencil />}
              additionalClassForCirBtn="hover:bg-mid-blue"
            />
          </Link>
        </div>
      )}
    </div>
  );
}

export default PageTitleBox;
