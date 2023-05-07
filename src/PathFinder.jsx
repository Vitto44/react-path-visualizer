import { useState } from "react";
import Bar from "./components/Bar";
import Node from "./components/Node";

const x = 30;
const y = 50;

const grid = [];

for (let i = 0; i < x; i++) {
  for (let j = 0; j < y; j++) {
    grid.push({
      num: i * y + j,
      status: 3,
      F: Infinity,
      prev: null,
      G: Infinity,
      H: Infinity,
    });
  }
}

grid[0].status = 0;
grid[grid.length - 1].status = 1;

const PathFinder = () => {
  const [mode, setMode] = useState(0);
  const [alg, setAlg] = useState(1);
  const [matrix, setMatrix] = useState(grid);
  const [disabledChoice, setDisabledChoice] = useState(false);
  const [disableStarters, setDisableStarters] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <div>
      <Bar />
      <div>
        <div>
          {matrix.map((node) => (
            <Node
              isMouseDown={isMouseDown}
              setIsMouseDown={setIsMouseDown}
              key={node.num}
              status={node.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PathFinder;
