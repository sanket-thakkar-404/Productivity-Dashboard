import Sidebar from "./Components/Sidebar/Sidebar";
import Timer from "./pages/Dashboard/Timer";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./pages/Dashboard/MainContent";
import Task from "./pages/Dashboard/Task";
import Calender from "./pages/Dashboard/Calender";

const App = () => {
  return (
    <BrowserRouter>
      {/* ONE ROOT LAYOUT */}
      <div className="flex h-screen p-8 gap-5 overflow-hidden ">
        {/* LEFT: Sidebar */}
        <Sidebar />
        <div className="flex-6">
          {/* RIGHT: Main Content */}
          <Routes>
            <Route path="/dashboard" element={<MainContent />} />
            <Route path="/" element={<MainContent />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/task" element={<Task />} />
            <Route path="/calendar" element={<Calender/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
