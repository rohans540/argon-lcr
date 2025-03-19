import React from "react";
import { useDrag } from "react-dnd";

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  status: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, description, status }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id, status, title, description },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex flex-col bg-[#2c2c37] w-[300px] h-[80px] rounded-[10px] px-4 py-2 cursor-grab ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <h4 className="text-white text-[20px] font-semibold">{title}</h4>
      <p className="text-gray-500 text-[14px] font-semibold">{description}</p>
    </div>
  );
};

export default TaskCard;
