import { HashRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import NewTask from "./pages/NewTask/NewTask";
import EditTask from "./pages/EditTask/EditTask";
import TaskDetail from "./pages/TaskDetail/TaskDetail";
import PageLoader from "./components/loaders/PageLoader";
import "./App.css";
import { useState, useEffect } from "react";
import { TodoProvider } from "./context/TodoContext";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [isloaded, setIsLoading] = useState<boolean>(false);
  const [renderContent, setRenderContent] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1800);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRenderContent(true);
    }, 2500);
  }, []);

  return (
    <main
      className={`app h-screen relative flex flex-col ${
        !isloaded ? `overflow-hidden` : `overflow-auto`
      }`}
    >
      {isloaded && renderContent ? (
        <div className={`appBox max-w-[500px] m-auto w-full min-h-[100vh]`}>
          <AnimatedCursor
            innerSize={12}
            outerSize={12}
            color="29, 38, 51"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={3.5}
            clickables={[
              'input[type="time"]',
              "a",
              'input[type="text"]',
              'input[type="number"]',
              'input[type="submit"]',
              "label[for]",
              "select",
              "button",
            ]}
          />
          <HashRouter>
            <TodoProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/taskDetail/:id" element={<TaskDetail />} />
                <Route path="/newTask" element={<NewTask />} />
                <Route path="/editTask/:id" element={<EditTask />} />
              </Routes>
            </TodoProvider>
          </HashRouter>
        </div>
      ) : (
        <PageLoader isloaded={isloaded} />
      )}
    </main>
  );
}

export default App;
