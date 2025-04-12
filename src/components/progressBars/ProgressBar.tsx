import { Progress } from "@/components/ui/progress";

type Props = {
  value?: number;
  progressColor: any;
  todo: any;
};

export function ProgressBar({ value, progressColor, todo }: Props) {
  const setColor = () => {
    if (todo.completed) {
      return "[&>div]:bg-emerald-600";
    } else if (progressColor === "bg-mid-blue") {
      return "[&>div]:bg-mid-blue";
    } else if (progressColor === "bg-golden-rod") {
      return "[&>div]:bg-golden-rod";
    } else if (progressColor === "bg-dark-red") {
      return "[&>div]:bg-dark-red";
    }
  };

  const color = setColor();

  return (
    <Progress
      value={value}
      className={`h-[1.1rem] bg-white ${color} [&>div]:rounded-full`}
    />
  );
}
