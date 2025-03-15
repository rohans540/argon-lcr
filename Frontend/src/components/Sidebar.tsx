const Sidebar = () => {
    return (
      <div className="w-64 h-full bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4">Boards</h2>
        <ul>
          <li>
            <a href="/board/1" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Platform Launch
            </a>
          </li>
          <li>
            <a href="/board/2" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Marketing Plan
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  