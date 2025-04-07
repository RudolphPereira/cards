import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  value: number;
  pathValueRGA: string;
};

export function CircleProgress({ value, pathValueRGA }: Props) {
  return (
    <CircularProgressbar
      className="w-[100%]"
      value={value}
      text={`${value}%`}
      strokeWidth={10}
      background
      backgroundPadding={6}
      styles={buildStyles({
        textSize: "1.3rem",
        pathColor: `rgba(${pathValueRGA}, 1)`,
        textColor: `#1d2633`,
        trailColor: "transparent",
        backgroundColor: "#f5f5f5",
      })}
    />
  );
}
