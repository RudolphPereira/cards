import { motion } from "motion/react";

type Props = {
  delayNum: number;
  children: any;
};

export const FadeIn = ({ delayNum, children }: Props) => {
  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center"
      initial={{ transform: "translateY(-2rem)", opacity: 0 }}
      animate={{ transform: "translateY(0)", opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: delayNum,
      }}
    >
      {children}
    </motion.div>
  );
};
