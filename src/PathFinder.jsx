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
    <div style={styles.main}>
      <Bar
        disableStarters={disableStarters}
        alg={alg}
        setAlg={setAlg}
        reset={() => setDisabledChoice(false)}
        disabledChoice={disabledChoice}
        setMode={setMode}
        mode={mode}
      />
      <div style={styles.center}>
        <div style={styles.grid}>
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

const styles = {
  main: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  center: {
    width: "100vw",
    maxWidth: "1000px",
    position: "absolute",
    top: "57%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%) ",
  },
  grid: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
};

export default PathFinder;
