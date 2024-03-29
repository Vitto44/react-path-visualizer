import { useState } from "react";
import Bar from "./components/Bar";
import Node from "./components/Node";
import aStar from "./algorithms/A-star";
import dijkstra from "./algorithms/Djikstra";
import { pathFinderStyle } from "./styles";

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

  const clearMatrix = () => {
    setDisabledChoice(false);
    setMatrix((prev) => {
      const newMatrix = [...prev];
      newMatrix.forEach((node) => {
        node.F = Infinity;
        node.G = Infinity;
        node.H = Infinity;
        node.prev = null;
        if (node.status !== 0 && node.status !== 1) {
          node.status = 3;
        }
      });
      return newMatrix;
    });
  };

  const reset = () => {
    setDisabledChoice(false);
    setMatrix((prev) => {
      const newMatrix = [...prev];
      newMatrix.forEach((node) => {
        node.F = Infinity;
        node.G = Infinity;
        node.H = Infinity;
        node.prev = null;
        if (node.status !== 0 && node.status !== 1 && node.status !== 2) {
          node.status = 3;
        }
      });
      return newMatrix;
    });
  };

  const Animate = (result, speed, type) => {
    setDisabledChoice(true);
    const { visitedNodes } = result;
    for (let i = 0; i < visitedNodes.length; i++) {
      setTimeout(
        () => {
          setMatrix((prev) => {
            const newMatrix = [...prev];
            if (i === 0) {
              newMatrix[visitedNodes[i].num].status = 0;
              return newMatrix;
            }
            if (
              i === visitedNodes.length - 1 &&
              type === "A*" &&
              !!result.path
            ) {
              newMatrix[visitedNodes[i].num].status = 1;
              return newMatrix;
            }
            newMatrix[visitedNodes[i].num].status = 5;
            return newMatrix;
          });
        },
        type === "djikstra" ? speed * i : speed
      );
    }

    if (result.path) {
      setTimeout(
        () => {
          for (let i = 0; i < result.path.length; i++) {
            setTimeout(() => {
              setMatrix((prev) => {
                const newMatrix = [...prev];
                if (i === result.path.length - 1) {
                  newMatrix[result.path[i].num].status = 1;
                  return newMatrix;
                }
                if (i === 0) {
                  newMatrix[result.path[i].num].status = 0;
                  return newMatrix;
                }
                newMatrix[result.path[i].num].status = 6;
                return newMatrix;
              });
            }, 25 * i);
          }
        },
        type === "djikstra"
          ? speed * visitedNodes.length
          : speed * result.path.length
      );
    } else {
      alert("No path found!");
      setDisableStarters(false);
      return;
    }

    if (result?.path) {
      setTimeout(
        () => {
          setDisableStarters(false);
        },
        type === "djikstra"
          ? speed * visitedNodes.length + 25 * result.path.length
          : speed * result.path.length + 25 * result.path.length
      );
    }
  };

  const startVisualization = () => {
    setDisableStarters(true);
    if (alg === 0) {
      const result = dijkstra(matrix);
      Animate(result, 10, "djikstra");
    }
    if (alg === 1) {
      const result = aStar([...matrix]);
      Animate(result, 15, "A*");
    }
  };

  return (
    <div style={pathFinderStyle.main}>
      <Bar
        disableStarters={disableStarters}
        alg={alg}
        setAlg={setAlg}
        reset={reset}
        disabledChoice={disabledChoice}
        setMode={setMode}
        mode={mode}
        clear={clearMatrix}
        start={startVisualization}
      />
      <div style={pathFinderStyle.center}>
        <div style={pathFinderStyle.grid}>
          {matrix.map((node) => (
            <Node
              isMouseDown={isMouseDown}
              setIsMouseDown={setIsMouseDown}
              disabledChoice={disabledChoice}
              setMatrix={setMatrix}
              mode={mode}
              key={node.num}
              num={node.num}
              status={node.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PathFinder;
