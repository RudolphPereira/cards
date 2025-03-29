import CircleBtn from "./CircleBtn";

type Props = {
  leftIcon?: any;
  rightIcon?: any;
  placeHolder: string;
  htmlFor?: string;
  id?: string;
  additionalClassForInput?: string;
  additionalClassForCirBtn?: string;
  additionalClassInputBox?: string;
};

export default function InputPill({
  leftIcon,
  rightIcon,
  placeHolder,
  htmlFor,
  id,
  additionalClassForInput,
  additionalClassForCirBtn,
}: Props) {
  return (
    <div
      className={`flex items-center gap-1 bg-white border border-gray-300 rounded-full searchForm h-14 group/search  group-focus/search`}
    >
      {leftIcon && (
        <label
          htmlFor={htmlFor}
          className="flex items-center justify-center rounded-full h-[56px] w-[56px] aspect-square"
        >
          {leftIcon}
        </label>
      )}

      <input
        type="text"
        className={`w-[100%]  h-[100%] outline-0 ${additionalClassForInput}`}
        id={id}
        placeholder={placeHolder}
      />
      {rightIcon && (
        <CircleBtn
          additionalClassForCirBtn={additionalClassForCirBtn}
          icon={rightIcon}
        />
      )}
    </div>
  );
}
