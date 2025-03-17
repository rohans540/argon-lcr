import React from "react"

interface TaskCardProps {
  title: string;
  description: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col bg-[#2c2c37] w-[300px] h-[80px] rounded-[10px] px-4 py-2">
      <h4 className="text-white text-[20px] font-semibold">{title}</h4>
      <p className="text-gray-500 text-[14px] font-semibold">{description}</p>
    </div>
  )
}

export default TaskCard