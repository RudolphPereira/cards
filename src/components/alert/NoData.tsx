import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function NoData() {
  return (
    <Alert className="text-mid-blue w-[100%] p-4 [&>svg]:text-mid-blue bg-white border border-gray-300 rounded-xl pointer-events-none">
      <AlertTitle className="text-base font-medium">
        Card Unavailable
      </AlertTitle>
      <AlertDescription className="text-sm text-dark-blue">
        We do not have any data for the current search term.
      </AlertDescription>
    </Alert>
  );
}
