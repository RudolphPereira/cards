import CircleBtn from "../buttons/CircleBtn";
import { Input } from "@/components/ui/input";

type Props = {
  leftIcon?: any;
  rightIcon?: any;
  placeHolder: string;
  htmlFor?: string;
  id?: string;
  additionalClassForInput?: string;
  additionalClassForCirBtn?: string;
  // additionalClassInputBox?: string;
  readonly?: boolean | undefined;
  value?: string;
  handleGetValue?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export default function InputPill({
  leftIcon,
  rightIcon,
  placeHolder,
  htmlFor,
  id,
  additionalClassForInput,
  additionalClassForCirBtn,
  readonly,
  value,
  handleGetValue,
}: Props) {
  return (
    <div
      className={`flex items-center gap-1 bg-white border border-gray-300 rounded-full searchForm w-[100%] h-14 group/search  group-focus/search  group/right-btn group-focus/right-btn`}
    >
      {leftIcon && (
        <label
          htmlFor={htmlFor}
          className="flex items-center justify-center rounded-full h-[56px] w-[56px] aspect-square"
        >
          {leftIcon}
        </label>
      )}

      <Input
        type="text"
        className={`${additionalClassForInput} w-[100%] h-[100%] outline-0 border-0 caret-mid-blue focus-visible:ring-0 shadow-none placeholder:text-base`}
        id={id}
        placeholder={placeHolder}
        readOnly={readonly}
        value={value}
        onChange={handleGetValue}
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
