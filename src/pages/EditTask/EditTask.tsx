import PageTitleBox from "@/components/PageTitleBox";
import { FadeIn } from "@/components/animations/FadeIn";
import Form from "@/components/form/Form";

type Props = {};

function EditTask({}: Props) {
  return (
    <div className="editTask flex flex-col gap-8 px-4 py-4.5">
      <FadeIn delayNum={0}>
        <PageTitleBox title="Edit Card" />
      </FadeIn>
      <Form />
    </div>
  );
}

export default EditTask;
