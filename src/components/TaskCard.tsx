import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import calendarIcon from "../assets/calendar.svg";
import topArrow from "../assets/topArrow.svg";
import moveIcon from "../assets/move.svg";
import { Link } from "react-router";

type Props = {
  DelelteEditComplete?: any;
  CircleProgress?: any;
  Tags?: any;
  TaskLink?: boolean;
  ProgressBar?: any;
};

export function TaskCard({
  DelelteEditComplete,
  CircleProgress,
  Tags,
  TaskLink,
  ProgressBar,
}: Props) {
  return (
    <Card className="w-full bg-golden-rod/20 border-0 p-4 flex flex-col gap-3 relative overflow-hidden">
      <CardHeader className="p-0">
        <CardTitle className="flex gap-2 justify-between flex-wrap p-0 items-center">
          <div className="leftActionBox flex gap-2 items-center w-[250px]">
            <div className="cardDot aspect-square rounded-full w-5 h-5 bg-whitesmoke border border-golden-rod"></div>
            {TaskLink ? (
              <Link to={"/TaskDetail"}>
                <TooltipProvider>
                  <Tooltip disableHoverableContent>
                    <TooltipTrigger asChild>
                      <span className="text-lg line-clamp-1 truncate  block hover:text-dark-red hover:underline transition-all duration-200 ease-in-out">
                        Prepare for job interview
                      </span>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="bg-dark-blue mt-1 text-whitesmoke"
                    >
                      <p>View Details</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            ) : (
              <span className="text-lg line-clamp-1 truncate  block">
                Prepare for job interview
              </span>
            )}
          </div>

          {DelelteEditComplete && (
            <div className="rightActionBox flex gap-1.5">
              {DelelteEditComplete}
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex gap-2 items-center justify-between">
        <div className="leftBox flex flex-col gap-2.5 text-base">
          <div className="dateBox flex gap-1.5 items-center">
            <div className="iconBox aspect-square w-[18px] h-[18px]">
              <img
                src={calendarIcon}
                alt="calendarIcon"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="textBox flex gap-1 items-center">
              <p className="opacity-60">Due Date:</p>
              <span className="text-golden-rod bg-whitesmoke px-2 rounded">
                Tomorrow, 9:00 AM
              </span>
            </div>
          </div>
          <div className="priorityBox flex gap-1.5 items-center">
            <div className="iconBox aspect-square w-[18px] h-[18px]">
              <img
                src={topArrow}
                alt="topArrowIcon"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="textBox flex gap-1 items-center">
              <p className="opacity-60">Priority: </p>
              <span>High</span>
              <span>(8/10)</span>
            </div>
          </div>
          <div className="categoryBox flex gap-1.5 items-center">
            <div className="iconBox aspect-square w-[18px] h-[18px]">
              <img
                src={moveIcon}
                alt="topArrowIcon"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="textBox flex gap-1 items-center">
              <p className="opacity-60">Complexity: </p>
              <span>Moderate</span>
              <span>(5/10)</span>
            </div>
          </div>
        </div>
        {CircleProgress && (
          <div className="rightActiontBox w-[100px] h-[100px] mr-2">
            {<CircleProgress value={40} pathValueRGA="222, 176, 56" />}
          </div>
        )}
      </CardContent>
      <CardFooter className=" p-0 pt-2">
        {Tags && (
          <div className="tagsBox flex gap-2 flex-wrap text-xs">{Tags}</div>
        )}

        {ProgressBar && (
          <div className="progressBox w-[100%] flex flex-col gap-4">
            <div className="textBox flex justify-between items-center font-medium text-lg text-dark-blue">
              <h3 className="">Task Completed</h3>
              <span className="flex items-center justify-center text-[14rem] absolute right-[-3rem] pointer-events-none top-[.9rem] font-black text-dark-blue/20">
                40
              </span>
            </div>
            <div className="barBox">
              <ProgressBar
                value={40}
                additionalClass={`[&>div]:bg-golden-rod`}
              />
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
