export const pathFinderStyle = {
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

export const nodeStyle = {
  border: "1px solid #1c2d41",
  width: "2vw",
  maxWidth: "20px",
  height: "2vw",
  maxHeight: "20px",
  cursor: "pointer",
  transition: "all 0.3s",
};

export const barStyle = {
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
