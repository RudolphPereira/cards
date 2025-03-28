import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X, Pencil, Check } from "lucide-react";
import calendarIcon from "../assets/calendar.svg";
import topArrow from "../assets/topArrow.svg";
import moveIcon from "../assets/move.svg";

export function TaskCard() {
  return (
    <Card className="w-full bg-golden-rod/20 border-0 p-4 flex flex-col gap-3">
      <CardHeader className="p-0">
        <CardTitle className="flex gap-2 justify-between flex-wrap p-0 items-center">
          <div className="leftActionBox flex gap-2 items-center">
            <div className="cardDot aspect-square rounded-full w-5 h-5 bg-golden-rod"></div>
            <span className="text-xl truncate">Prepare for job interview</span>
          </div>

          <div className="rightActionBox flex gap-1.5">
            <Button className="bg-dark-blue text-white cursor-pointer rounded-full aspect-square transition-all duration-200 ease-in-out hover:bg-dark-red hover:shadow-lg active:scale-95 group">
              <X className="group-hover:rotate-90 transition-all ease-in-out duration-200" />
            </Button>
            <Button className=" group bg-dark-blue text-white cursor-pointer rounded-full aspect-square transition-all duration-200 ease-in-out hover:bg-mid-blue hover:shadow-lg active:scale-95">
              <Pencil className="group-hover:-rotate-45 transition-all ease-in-out duration-200" />
            </Button>
            <Button className="group bg-dark-blue text-white cursor-pointer rounded-full aspect-square transition-all duration-200 ease-in-out hover:bg-emerald-600 hover:shadow-lg active:scale-95">
              <Check className="group-hover:scale-120 transition-all ease-in-out duration-200" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
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
              <span className="text-dark-red">Tomorrow, 9:00 AM</span>
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
              <span>8/10</span>
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
              <span>5/10</span>
            </div>
          </div>
        </div>
        <div className="rightBox"></div>
      </CardContent>
      <CardFooter className=" p-0 pt-2">
        <div className="tagsBox flex gap-2 flex-wrap text-xs">
          <span className="px-2 py-1 rounded-full bg-golden-rod/45">
            Job interview
          </span>
          <span className="px-2 py-1 rounded-full bg-mid-blue/45">Career</span>
          <span className="px-2 py-1 rounded-full bg-dark-red/45">
            Preparation
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
