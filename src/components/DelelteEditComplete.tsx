import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { X, Pencil, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

type Props = {};

export function DelelteEditComplete({}: Props) {
  return (
    <>
      <TooltipProvider>
        <Tooltip disableHoverableContent>
          <TooltipTrigger asChild>
            <Button className="bg-whitesmoke text-dark-blue cursor-pointer rounded-full aspect-square transition-all duration-500 ease-in-out hover:bg-dark-red hover:shadow-lg active:scale-95 group w-[40px] h-[40px]">
              <X className="group-hover:rotate-90 transition-all ease-in-out duration-300 group-hover:text-white group-hover:scale-110" />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="bg-dark-blue mt-2 text-whitesmoke"
          >
            <p>Delete Card</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip disableHoverableContent>
          <TooltipTrigger asChild>
            <Link to={"./EditTask"}>
              <Button className="w-[40px] h-[40px] group bg-whitesmoke text-dark-blue cursor-pointer rounded-full aspect-square transition-all duration-500 ease-in-out hover:bg-mid-blue hover:shadow-lg active:scale-95">
                <Pencil className="group-hover:scale-110 transition-all ease-in-out duration-300 group-hover:text-white" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="bg-dark-blue mt-2 text-whitesmoke"
          >
            <p>Edit Card</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip disableHoverableContent>
          <TooltipTrigger asChild>
            <Button className="w-[40px] h-[40px] group bg-whitesmoke text-dark-blue cursor-pointer rounded-full aspect-square transition-all duration-500 ease-in-out hover:bg-emerald-600 hover:shadow-lg active:scale-95">
              <Check className="group-hover:scale-120 transition-all ease-in-out duration-300 group-hover:text-white" />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="bg-dark-blue mt-2 text-whitesmoke"
          >
            <p>Mark Complete</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
