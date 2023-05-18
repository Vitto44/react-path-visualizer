import React from "react";
import { barStyle } from "../styles";

const modes = [
  { id: 0, name: "Start" },
  { id: 1, name: "End" },
  { id: 2, name: "Wall" },
  { id: 3, name: "Clear" },
];
const algorithms = [
  { id: 0, name: "Dijkstra" },
  { id: 1, name: "A*" },
];

const Bar = ({
  disableStarters,
  mode,
  setMode,
  start,
  clear,
  disabledChoice,
  reset,
  alg,
  setAlg,
}) => {
  return (
    <div>
      {
        <p style={barStyle.disabledText}>
          {disabledChoice && "*To change parameters clear or reset the Grid"}
        </p>
      }
      <div style={barStyle.main}>
        <div style={barStyle.buttonBackground}>
          <button
            disabled={disableStarters}
            style={{
              ...barStyle.button,
              backgroundColor: "crimson",
              color: "white",
              opacity: disableStarters ? 0.5 : 1,
            }}
            onClick={clear}
          >
            Clear
          </button>
          <button
            disabled={disableStarters}
            style={{
              ...barStyle.button,
              backgroundColor: "#ca5310",
              color: "white",
              opacity: disableStarters ? 0.5 : 1,
            }}
            onClick={reset}
          >
            Reset
          </button>
          <button
            disabled={disableStarters}
            style={{
              ...barStyle.button,
              backgroundColor: "darkGreen",
              color: "white",
              opacity: disableStarters ? 0.5 : 1,
            }}
            onClick={start}
          >
            Visualize
          </button>
        </div>
        <div style={barStyle.buttonBackground}>
          {modes.map((Item) => (
            <button
              disabled={disabledChoice}
              key={Item.id}
              style={{
                ...barStyle.button,
                backgroundColor:
                  Item.id === mode
                    ? "#42a5f5"
                    : barStyle.button.backgroundColor,
                opacity: disabledChoice ? 0.5 : 1,
              }}
              onClick={() => setMode(Item.id)}
            >
              {Item.name}
            </button>
          ))}
        </div>
        <div style={barStyle.buttonBackground}>
          {algorithms.map((Item) => (
            <button
              disabled={disabledChoice}
              key={Item.id}
              style={{
                ...barStyle.button,
                backgroundColor:
                  Item.id === alg ? "#42a5f5" : barStyle.button.backgroundColor,
                opacity: disabledChoice ? 0.5 : 1,
              }}
              onClick={() => setAlg(Item.id)}
            >
              {Item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bar;
