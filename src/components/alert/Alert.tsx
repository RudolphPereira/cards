import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function AlertInfo() {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }, []);

  return (
    <motion.div
      initial={{ transform: "translateY(2rem)", opacity: 0 }}
      animate={
        showAlert
          ? { transform: "translateY(0)", opacity: 1 }
          : { transform: "translateY(2rem)", opacity: 0 }
      }
      transition={{
        duration: 0.4,
        delay: 0.5,
      }}
      className="relative"
    >
      <Alert className="text-mid-blue w-[100%] p-4 [&>svg]:text-mid-blue bg-white border border-gray-300 rounded-xl pointer-events-none">
        <Zap className="h-10 w-10" />
        <AlertTitle className="text-base font-medium">
          Power Mode Activated
        </AlertTitle>
        <AlertDescription className="text-sm text-dark-blue">
          The most important card on the basis of Priority and Complexity is now
          displayed.
        </AlertDescription>
      </Alert>
    </motion.div>
  );
}
