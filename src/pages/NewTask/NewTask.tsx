import Form from "@/components/form/Form";
import { FadeIn } from "@/components/animations/FadeIn";
import PageTitleBox from "@/components/PageTitleBox";
import { useTodo } from "@/context/TodoContext";

type Props = {};

function NewTask({}: Props) {
  return (
    <div className="newTask flex flex-col gap-8 px-4 py-4.5">
      <FadeIn delayNum={0}>
        <PageTitleBox title="Add New Card" />
      </FadeIn>
      <Form />
    </div>
  );
}

export default NewTask;
