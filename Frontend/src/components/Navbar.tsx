import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { setOpenTaskForm } from "../redux/app.slice";
import { RootState } from "../redux/store";

const Navbar = () => {
  const { currentBoard } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch()

  return (
    <nav className="w-[calc(100%-16rem)] fixed left-64 top-0 h-[100px] bg-[#2c2c37] border-b-[0.2px] border-gray-500 flex items-center px-6">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-[22px] font-semibold">{currentBoard.title}</div>
        <Button
          btnType="button"
          title="+ Add new task"
          handleClick={() => dispatch(setOpenTaskForm(true))}
          className="flex items-center justify-center rounded-[30px] font-semibold h-[50px] w-[200px] p-4 bg-[#645fc5] text-white hover:bg-[#2c2c37] hover:border-[1px] border-[#645fc5] hover:text-[#645fc5]"
          disabled={false}
        />
      </div>
    </nav>
  );
};

export default Navbar;
