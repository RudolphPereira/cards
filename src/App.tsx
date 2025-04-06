import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import NewTask from "./pages/NewTask/NewTask";
import EditTask from "./pages/EditTask/EditTask";
import TaskDetail from "./pages/TaskDetail/TaskDetail";
import PageLoader from "./components/loaders/PageLoader";
import "./App.css";
import { useState, useEffect } from "react";
import { TodoProvider } from "./context/TodoContext";

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
    }, 2650);
  }, []);

  return (
    <main
      className={`app  h-screen relative flex flex-col ${
        !isloaded ? ` overflow-hidden` : ` overflow-auto`
      }`}
    >
      {isloaded && renderContent ? (
        <div className={`appBox max-w-[500px]  m-auto w-full min-h-[100vh]`}>
          <BrowserRouter>
            <TodoProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/taskDetail/:id" element={<TaskDetail />} />
                <Route path="/newTask" element={<NewTask />} />
                <Route path="/editTask/:id" element={<EditTask />} />
              </Routes>
            </TodoProvider>
          </BrowserRouter>
        </div>
      ) : (
        <PageLoader isloaded={isloaded} />
      )}
    </main>
  );
}

export default App;
