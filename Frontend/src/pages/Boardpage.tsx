import { useParams } from "react-router-dom";

const BoardPage = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-3xl font-bold">Board {id}</h1>
    </div>
  );
};

export default BoardPage;
