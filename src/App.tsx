import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import NewTask from "./pages/NewTask/NewTask";
import EditTask from "./pages/EditTask/EditTask";
import TaskDetail from "./pages/TaskDetail/TaskDetail";
import { motion } from "motion/react";
import cardLogo from "./assets/cardsLogo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [isloaded, setIsloaded] = useState<Boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsloaded(true);
    }, 2000);
  }, []);

  return (
    <div className="overflow-hidden h-[100vh] relative">
      <div className="app w-[991px] m-auto h-[100vh]:">
        <div className="appBox overflow-hidden w-[500px] p-4 m-auto">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/taskDetail" element={<TaskDetail />} />
              <Route path="/newTask" element={<NewTask />} />
              <Route path="/editTask" element={<EditTask />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>

      {/* Loader */}
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
          alt=""
          className=""
          initial={{ scale: 0 }}
          animate={{ scale: 4 }}
          transition={{
            duration: 0.6,
            scale: { type: "spring", visualDuration: 0.8, bounce: 0.6 },
          }}
        />
      </motion.div>
    </div>
  );
}

export default App;
