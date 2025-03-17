import Grid from "../components/Grid";
import TaskCard from "../components/TaskCard";

const taskList = [
  {
    title: "Task 1",
    description: "Implement auth"
  },
  {
    title: "Task 2",
    description: "Change welcome note"
  },
  {
    title: "Task 3",
    description: "Build pipeline for FE"
  },
  {
    title: "Task 4",
    description: "Fix bug #898"
  },
  {
    title: "Task 5",
    description: "Design Navbar"
  },
]

const BoardPage = () => {

  return (
    <div className="flex flex-col items-center justify-start mt-[50px] ml-[20px] min-h-screen w-full bg-[#23232e] text-white">

      <Grid columns={3}>
        <StatusHead label="TODO" color="#45c4e4" count={2} />
        <StatusHead label="In Progress" color="#836ff7" count={2} />
        <StatusHead label="Done" color="#6be1b0" count={1} />
        {taskList.map((task, index) => (
          <TaskCard title={task.title} description={task.description} key={task.title+index} />
        ))}
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

export default BoardPage;
