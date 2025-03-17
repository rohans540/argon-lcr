import { useSelector } from "react-redux";
import Grid from "../components/Grid";
import TaskCard from "../components/TaskCard";
import { RootState } from "../redux/store";
import { TaskProps } from "../redux/types";

const status = [
  {
    label: "TODO",
    color: "#45c4e4",
  },
  {
    label: "In Progress",
    color: "#836ff7",
  },
  {
    label: "Done",
    color: "#6be1b0",
  },
]

const BoardPage = () => {

  const { currentBoard } = useSelector((state: RootState) => state.app);

  return (
    <div className="flex flex-col absolute left-64 items-baseline justify-start mt-[50px] min-h-screen w-full bg-[#23232e] text-white">

      <Grid columns={3}>
        {status.map((status) => (
          <StatusHead label={status.label} color={status.color} count={2} />
        ))}
        {currentBoard?.tasks?.length ? currentBoard.tasks.map((task: TaskProps, index: number) => (
          <TaskCard title={task.title} description={task.description} key={task.title+index} />
        )) : <NoTasks />}
      </Grid>
    </div>
  );
};

type StatusProps = {
  label: string;
  color: string;
  count?: number;
}

const StatusHead: React.FC<StatusProps> = ({ label, color, count }) => {
  return (
    <div className="flex gap-[10px] items-center">
      <div className={`block w-[20px] h-[20px] rounded-full`} style={{ backgroundColor: color }}></div>
      <span className="text-[14px] text-gray-500 font-semibold font-poppins">{label.toUpperCase()} ({count})</span>
    </div>
  )
}

const NoTasks = () => (<h2 className="text-[20px] text-gray-500 font-poppins font-semibold">No Tasks</h2>)

export default BoardPage;
