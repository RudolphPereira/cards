import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import NewTask from "./pages/NewTask/NewTask";
import EditTask from "./pages/EditTask/EditTask";
import TaskDetail from "./pages/TaskDetail/TaskDetail";
import HomePageLoader from "./components/HomePageLoader";
import "./App.css";

function App() {
  return (
    <main className="app h-[100vh] relative overflow-hidden">
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

      <HomePageLoader />
    </main>
  );
}

export default App;
