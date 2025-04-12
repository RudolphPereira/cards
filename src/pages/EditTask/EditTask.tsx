import PageTitleBox from "@/components/PageTitleBox";
import { FadeIn } from "@/components/animations/FadeIn";
import { useTodo } from "@/context/TodoContext";
import Form from "@/components/form/Form";
import { useParams } from "react-router";

type Props = {};

function EditTask({}: Props) {
  const { id } = useParams();
  const { getTodo }: any = useTodo();

  const todo = getTodo(id);

  return (
    <div className="editTask flex flex-col gap-8 px-4 py-4.5">
      <FadeIn delayNum={0}>
        <PageTitleBox title="Edit Card" />
      </FadeIn>
      <Form todo={todo} />
    </div>
  );
}

export default EditTask;
