import { motion } from "motion/react";
import cardLogo from "../assets/cardsLogo.svg";

type Props = {
  isloaded: boolean;
};

function HomePageLoader({ isloaded }: Props) {
  return (
    <>
      <motion.div
        className="bg-pale-sand pointer-events-none h-[100vh] flex justify-center items-center absolute w-[100%] top-0 left-0 overflow-hidden"
        initial={{ transform: "translateY(0)" }}
        animate={
          isloaded
            ? { transform: "translateY(100%)" }
            : { transform: "translateY(0)" }
        }
        transition={{
          duration: 0.8,
        }}
      >
        <motion.img
          src={cardLogo}
          alt="logoImage"
          initial={{ scale: 0 }}
          animate={{ scale: 3.5 }}
          transition={{
            duration: 0.6,
            scale: { type: "spring", visualDuration: 0.8, bounce: 0.6 },
          }}
        />
      </motion.div>
    </>
  );
}

export default HomePageLoader;
