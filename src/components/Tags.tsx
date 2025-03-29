import { Badge } from "@/components/ui/badge";
type Props = {};

export function Tags({}: Props) {
  return (
    <>
      <Badge className="rounded-full bg-golden-rod/45 text-dark-blue">
        Job interview
      </Badge>
      <Badge className="rounded-full bg-mid-blue/45 text-dark-blue">
        Career
      </Badge>
      <Badge className="rounded-full bg-dark-red/45 text-dark-blue">
        Preparation
      </Badge>
    </>
  );
}
