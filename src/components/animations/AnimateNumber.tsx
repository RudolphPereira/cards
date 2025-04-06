import { motion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

function AnimateNumber({ value }: { value: number }) {
  let spring = useSpring(value, { mass: 0.5, stiffness: 75, damping: 15 });
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);
  return <motion.span>{display}</motion.span>;
}

export default AnimateNumber;
