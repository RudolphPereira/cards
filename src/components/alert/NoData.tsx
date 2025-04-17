import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {
  title?: string;
  desc?: string;
};

export default function NoData({ title, desc }: Props) {
  return (
    <Alert className="text-mid-blue w-[100%] p-4 [&>svg]:text-mid-blue bg-white border border-gray-300 rounded-xl pointer-events-none">
      <AlertTitle className="text-base font-medium">{title}</AlertTitle>
      <AlertDescription className="text-sm text-dark-blue">
        {desc}
      </AlertDescription>
    </Alert>
  );
}
