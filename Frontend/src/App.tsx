import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoardPage from "./pages/Boardpage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { getAllBoards } from "./redux/app.slice";
import { RootState } from "./redux/store";
import Loader from "./components/Loader";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    dispatch(getAllBoards())
  }, [dispatch])

  return (
    <div className="flex h-screen text-white overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <div className="flex-1 p-6 pt-[80px] overflow-auto bg-[#23232e]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board/:id" element={<BoardPage />} />
          </Routes>
        </div>
      </div>
      <Loader loading={loading} />
    </div>
  );
}

export default App;
