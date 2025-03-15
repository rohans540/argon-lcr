const Home = () => {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full">
        <h1 className="text-4xl font-bold mb-4">Kanban Board</h1>
        <a href="/board/1" className="px-6 py-3 bg-blue-500 rounded text-white">
          Go to Board 1
        </a>
      </div>
    );
  };
  
  export default Home;
  