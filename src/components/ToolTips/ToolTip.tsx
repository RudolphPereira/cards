import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  content: any;
  toolTipText: string;
};

export function ToolTip({ content, toolTipText }: Props) {
  return (
    <>
      <TooltipProvider>
        <Tooltip disableHoverableContent>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="bg-dark-blue mt-2 text-whitesmoke"
          >
            <p>{toolTipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

// export default ToolTip;
