import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import NewTask from "./pages/NewTask/NewTask";
import EditTask from "./pages/EditTask/EditTask";
import TaskDetail from "./pages/TaskDetail/TaskDetail";
import HomePageLoader from "./components/HomePageLoader";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isloaded, setIsLoading] = useState<boolean>(false);
  const [renderContent, setRenderContent] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRenderContent(true);
    }, 2900);
  }, []);

  return (
    <main
      className={`app relative ${
        !isloaded ? `h-[100vh] overflow-hidden` : `min-h-[100vh] overflow-auto`
      }`}
    >
      {isloaded && renderContent ? (
        <div className="appBox w-[500px] px-4 py-8 m-auto ">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/taskDetail" element={<TaskDetail />} />
              <Route path="/newTask" element={<NewTask />} />
              <Route path="/editTask" element={<EditTask />} />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <HomePageLoader isloaded={isloaded} />
      )}
    </main>
  );
}

export default App;
