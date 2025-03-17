import React from "react";

interface GridProps {
  columns?: number;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ columns = 3, children }) => {
  return (
    <div
      className={`grid gap-4 p-4`}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {children}
    </div>
  );
};

export default Grid;
