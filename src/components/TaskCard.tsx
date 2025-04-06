import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import calendarIcon from "../assets/calendar.svg";
import topArrow from "../assets/topArrow.svg";
import moveIcon from "../assets/move.svg";
import tally from "../assets/tally.svg";
import { Link, useParams } from "react-router";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { setIntensity } from "@/lib/utils";
import { X, Pencil, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTodo } from "@/context/TodoContext";
import AnimatedNumber from "@/components/animations/AnimateNumber";
import { ToolTip } from "./ToolTips/ToolTip";
import { useEffect } from "react";

type Props = {
  DeleteEditComplete?: boolean;
  CircleProgress?: any;
  Tags?: boolean;
  TaskLink?: boolean;
  ProgressBar?: any;
  todo?: any;
};

export function TaskCard({
  DeleteEditComplete,
  CircleProgress,
  TaskLink,
  ProgressBar,
  todo,
  Tags,
}: Props) {
  // Params
  let { id } = useParams();
  id = todo.id;

  // Use Context
  const { deleteTodo, completeTodo, getProgress, getCardColor }: any =
    useTodo();

  // Beta test for when the day changes the card color should change too
  useEffect(() => {
    getCardColor(todo.id);
  }, []);

  const progressValue: any = getProgress(todo.id);

  const cardColor: string = getCardColor(todo.id);

  const getRGAColor = () => {
    if (cardColor === "bg-dark-red") {
      return "172, 40, 40";
    } else if (cardColor === "bg-golden-rod") {
      return "222, 176, 56";
    } else if (cardColor === "bg-mid-blue") {
      return "48, 106, 159";
    }
  };

  const setCircleProgressColor = getRGAColor();

  const getDateTimeColor = () => {
    if (cardColor === "bg-dark-red") {
      return "text-dark-red";
    } else if (cardColor === "bg-golden-rod") {
      return "text-golden-rod";
    } else if (cardColor === "bg-mid-blue") {
      return "text-mid-blue";
    }
  };

  const setDateTimeTextColor = getDateTimeColor();

  const getCardBgColor = () => {
    if (cardColor === "bg-dark-red") {
      return "bg-dark-red/20";
    } else if (cardColor === "bg-golden-rod") {
      return "bg-golden-rod/20";
    } else if (cardColor === "bg-mid-blue") {
      return "bg-mid-blue/20";
    }
  };

  const setCardBgColor = getCardBgColor();

  const getCardDotColor = () => {
    if (cardColor === "bg-dark-red") {
      return "border-dark-red";
    } else if (cardColor === "bg-golden-rod") {
      return "border-golden-rod";
    } else if (cardColor === "bg-mid-blue") {
      return "border-mid-blue";
    }
  };

  const setCardDotColor = getCardDotColor();

  return (
    <Card
      key={todo.id}
      className={`w-full ${
        todo.completed ? `bg-emerald-600/20` : setCardBgColor
      } border-0 p-4 flex flex-col gap-3 relative overflow-hidden transition-all duration-200 ease-in-out`}
    >
      <CardHeader className="p-0">
        <CardTitle className="flex gap-2 justify-between flex-wrap p-0 items-center">
          <div className="leftActionBox flex gap-y-3 gap-x-1 items-center max-w-[250px]">
            <div
              className={` ${
                todo.completed ? "border-emerald-600" : setCardDotColor
              } border cardDot aspect-square rounded-full w-5 h-5 bg-whitesmoke transition-all duration-200 ease-in-out`}
            ></div>
            {TaskLink ? (
              <Link to={`/TaskDetail/${id}`}>
                <ToolTip
                  content={
                    <span
                      className={` ${
                        todo.completed ? `line-through` : `no-underline`
                      } text-lg line-clamp-1 truncate  block hover:text-dark-red hover:underline transition-all duration-200 ease-in-out max-w-[270px] `}
                    >
                      {todo.title}
                    </span>
                  }
                  toolTipText="View Details"
                />
              </Link>
            ) : (
              <span className="text-lg line-clamp-1 truncate  block">
                {todo.title}
              </span>
            )}
          </div>

          {DeleteEditComplete && (
            <div className="rightActionBox flex gap-1.5">
              <ToolTip
                content={
                  <Button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-whitesmoke text-dark-blue cursor-pointer rounded-full aspect-square transition-all duration-500 ease-in-out hover:bg-dark-red hover:shadow-lg active:scale-95 group w-[40px] h-[40px]"
                  >
                    <X className="group-hover:rotate-90 transition-all ease-in-out duration-300 group-hover:text-white group-hover:scale-110" />
                  </Button>
                }
                toolTipText="Delete Card"
              />

              <Link to={"./EditTask"}>
                <ToolTip
                  content={
                    <Button className="w-[40px] h-[40px] group bg-whitesmoke text-dark-blue cursor-pointer rounded-full aspect-square transition-all duration-500 ease-in-out hover:bg-mid-blue hover:shadow-lg active:scale-95">
                      <Pencil className="group-hover:scale-110 transition-all ease-in-out duration-300 group-hover:text-white" />
                    </Button>
                  }
                  toolTipText="Edit Card"
                />
              </Link>

              <ToolTip
                content={
                  <Button
                    onClick={() => completeTodo(todo.id)}
                    className={`${
                      todo.completed
                        ? `bg-emerald-600 text-white`
                        : `bg-whitesmoke text-dark-blue`
                    } w-[40px] h-[40px] group cursor-pointer rounded-full aspect-square transition-all duration-500 ease-in-out hover:bg-emerald-600 hover:shadow-lg active:scale-95`}
                  >
                    <Check className="group-hover:scale-120 transition-all ease-in-out duration-300 group-hover:text-white" />
                  </Button>
                }
                toolTipText="Mark Complete"
              />
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex gap-2 items-center justify-center flex-wrap flex-col sm:flex-row  sm:justify-between">
        <div className="leftBox flex-1 flex flex-col gap-2.5 text-base">
          <div className="dateBox flex gap-1.5 items-center">
            <div className="iconBox aspect-square w-[18px] h-[18px]">
              <img
                src={calendarIcon}
                alt="calendarIcon"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="textBox flex gap-1 items-center flex-wrap">
              <p className="opacity-60">Due Date:</p>
              <span
                className={`
                 ${
                   todo.completed ? `text-emerald-600` : setDateTimeTextColor
                 } bg-whitesmoke px-2 rounded shadow-xs transition-all duration-200 ease-in-out`}
              >
                {`
                ${
                  todo.dateSelected === undefined
                    ? "Not Set"
                    : todo.dateSelected < new Date().setHours(0, 0, 0, 0)
                    ? "Over Due"
                    : format(todo.dateSelected, "PP")
                }
                `}
              </span>
              <span
                className={`
                 ${
                   todo.completed ? `text-emerald-600` : setDateTimeTextColor
                 } bg-whitesmoke px-2 rounded shadow-xs transition-all duration-200 ease-in-out`}
              >{`${todo.timeSelected}`}</span>
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
            <div className="textBox flex gap-1 items-center flex-wrap">
              <p className="opacity-60">Priority: </p>
              <span>{setIntensity(todo.priority)}</span>
              <span>{`(${todo.priority}/10)`}</span>
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
            <div className="textBox flex gap-1 items-center flex-wrap">
              <p className="opacity-60">Complexity: </p>
              <span>{setIntensity(todo.complexity)}</span>
              <span>{`(${todo.complexity}/10)`}</span>
            </div>
          </div>
          <div className="TasksNoBox flex gap-1.5 items-center">
            <div className="iconBox aspect-square w-[18px] h-[18px]">
              <img src={tally} alt="hash" className="w-[100%] h-[100%]" />
            </div>
            <div className="textBox flex gap-1 items-center flex-wrap">
              <p className="opacity-60">No Of Tasks: </p>
              <span>{todo.subTasks.length}</span>
            </div>
          </div>
        </div>
        {CircleProgress && (
          <div className="rightActionBox w-[150px] h-[150px] sm:w-[110px] md:h-[110px] mr-2 shadow-xs rounded-full items-center flex">
            {
              <CircleProgress
                value={todo.completed ? 100 : progressValue}
                pathValueRGA={
                  todo.completed ? "5, 150, 105" : setCircleProgressColor
                }
              />
            }
          </div>
        )}
      </CardContent>
      <CardFooter className="p-0 pt-2 ">
        {Tags && (
          <div className="tagContent">
            <div className="tagsBox flex gap-2 flex-wrap text-xs w-full">
              {todo.tags.map((item: any, index: number) => {
                return (
                  <Badge
                    key={index}
                    className={`rounded-full ${item[1]} text-dark-blue shadow-xs flex items-center justify-center`}
                  >
                    {item[0]}
                  </Badge>
                );
              })}
            </div>
          </div>
        )}

        {ProgressBar && (
          <div className="progressBox w-[100%] flex flex-col gap-2">
            <div className="textBox flex justify-between items-center font-medium text-lg text-dark-blue">
              <h3 className="">Tasks Completed</h3>
              <span className="flex items-center justify-center text-[14rem] absolute right-[-3rem] pointer-events-none top-[2.2rem] font-black text-dark-blue/15 transition-all duration-200 ease-in-out">
                <AnimatedNumber value={todo.completed ? 100 : progressValue} />
              </span>
            </div>
            <div className="barBox shadow-xs rounded-full">
              <ProgressBar
                value={todo.completed ? 100 : progressValue}
                additionalClass={` ${
                  todo.completed
                    ? "[&>div]:bg-emerald-600"
                    : `[&>div]:${cardColor}`
                }`}
              />
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
