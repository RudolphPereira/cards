import { Progress } from "@/components/ui/progress";

type Props = {
  value?: number;
  additionalClass?: string;
};

export function ProgressBar({ value, additionalClass }: Props) {
  return (
    <Progress
      value={value}
      className={`${additionalClass} [&>div]:rounded-full h-[1.1rem] bg-white`}
    />
  );
}
