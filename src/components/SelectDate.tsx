import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  date?: Date | undefined;
  setDate?: any;
  id?: string;
};

export function SelectDate({ date, setDate, id }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id={id}
          className={cn(
            "date-btn flex-1 justify-between text-left font-normal text-sm bg-white border  border-gray-300 text-dark-blue rounded-full cursor-pointer py-3 shadow-none hover:bg-white  h-[50px]",
            !date && "text-muted-foreground"
          )}
        >
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="pl-0 text-dark-blue/60 text-base flex-2">
              Select Date
            </span>
          )}
          <CalendarIcon className="aspect-square w-[24px] h-[24px] scale-125 mr-1 text-dark-blue" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-0 rounded-2xl">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="border-0 rounded-2xl"
          showOutsideDays
          fromDate={new Date()}
        />
      </PopoverContent>
    </Popover>
  );
}
