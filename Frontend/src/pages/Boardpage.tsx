import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDrop } from "react-dnd";
import Grid from "../components/Grid";
import TaskCard from "../components/TaskCard";
import { RootState } from "../redux/store";
import { TaskProps } from "../redux/types";
import Popform from "../components/Popform";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import CreateNewTask from "../components/CreateNewTask";
import { createBoard, setOpenForm, updateTask } from "../redux/app.slice";

const statusList = [
  { label: "TODO", color: "#45c4e4" },
  { label: "In Progress", color: "#836ff7" },
  { label: "Done", color: "#6be1b0" },
];

const BoardPage = () => {
  const { currentBoard, openForm, openTaskForm } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<{ title: string }>();

  const onSubmit = (data: { title: string }) => {
    dispatch(createBoard({ title: data.title }));
    dispatch(setOpenForm(false));
    toast.success("Board created successfully");
    reset();
  };

  const hasNoTasks = !currentBoard?.tasks || currentBoard.tasks.length === 0;

  return (
    <div className="flex flex-col absolute left-64 items-baseline justify-start mt-[50px] min-h-screen w-full bg-[#23232e] text-white">
      {hasNoTasks ? (
        <NoTasks />
      ) : (
        <Grid columns={3}>
          {statusList.map((status) => (
            <StatusColumn key={status.label} status={status} />
          ))}
        </Grid>
      )}

      {openForm && (
        <Popform
          open={openForm}
          onClose={() => dispatch(setOpenForm(false))}
          title="Create Board"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            id="title"
            placeHolder="Title"
            inputType="text"
            register={register("title", { required: true })}
          />
          <Button
            btnType="submit"
            title="Create new"
            handleClick={() => { }}
            className="flex items-center justify-center rounded-[30px] font-semibold h-[40px] w-[180px] p-4 bg-[#645fc5] text-white hover:bg-[#2c2c37] hover:border-[1px] border-[#645fc5] hover:text-[#645fc5]"
          />
        </Popform>
      )}

      {openTaskForm && <CreateNewTask />}
    </div>
  );
};

// Droppable Status Column
const StatusColumn: React.FC<{ status: { label: string; color: string } }> = ({
  status,
}) => {
  const dispatch = useDispatch();
  const { currentBoard } = useSelector((state: RootState) => state.app);

  // Filter tasks based on status
  const filteredTasks =
    currentBoard?.tasks?.filter((task: TaskProps) => task.status === status.label) || [];

  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item: { id: string; status: string, title: string, description: string }) => {
      dispatch(updateTask({
        id: item?.id,
        title: item?.title,
        description: item?.description,
        status: status.label
      }))
      toast.success("Status updated successfully")
    },
  }));

  return (
    <div ref={drop} className="flex flex-col gap-4 p-2 min-h-[200px]">
      <StatusHead label={status.label} color={status.color} count={filteredTasks.length} />
      {filteredTasks.map((task: TaskProps) => (
        <TaskCard
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          key={task.id}
        />
      ))}
    </div>
  );
};

const StatusHead: React.FC<{ label: string; color: string; count?: number }> = ({
  label,
  color,
  count,
}) => {
  return (
    <div className="flex gap-[10px] items-center">
      <div className={`block w-[20px] h-[20px] rounded-full`} style={{ backgroundColor: color }}></div>
      <span className="text-[14px] text-gray-500 font-semibold font-poppins">
        {label.toUpperCase()} ({count})
      </span>
    </div>
  );
};

const NoTasks = () => (
  <h2 className="text-[20px] text-gray-500 font-poppins font-semibold">
    No Tasks
  </h2>
);

export default BoardPage;
