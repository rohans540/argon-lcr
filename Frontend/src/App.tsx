import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoardPage from "./pages/Boardpage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex justify-center items-center p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/:id" element={<BoardPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
