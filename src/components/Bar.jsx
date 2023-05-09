import React from "react";

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

const Bar = () => {
  return <div>bar</div>;
};

const styles = {
  main: {
    width: "100%",
    color: "white",
    height: "fit-content",
    margin: "0px auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#bbdefb",
    fontWeight: "bold",
    width: "80px",
    color: "black",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    margin: "5px 5px",
    cursor: "pointer",
  },
  disabledText: {
    color: "#fff",
    height: "15px",
  },
  buttonBackground: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "3px",
    margin: "5px",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
  },
};
export default Bar;
