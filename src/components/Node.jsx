// enum for status
const getColor = (status) => {
  switch (status) {
    // clear
    case 3:
      return "#eaebed";
    // start
    case 0:
      return "#0c7c59";
    // end
    case 1:
      return "#ff595e";
    // wall
    case 2:
      return "#1c2d41";
    // visited
    case 4:
      return "#eaebed";
    // showVisited
    case 5:
      return "#89c2d9";
    // showPath
    case 6:
      return "#faa307";
    default:
      return "#eaebed";
  }
};

const Node = ({ status }) => {
  const styles = {
    node: {
      backgroundColor: getColor(status),
      border: "1px solid #1c2d41",
      width: "2vw",
      maxWidth: "20px",
      height: "2vw",
      maxHeight: "20px",
      cursor: "pointer",
      transition: "all 0.3s",
    },
  };
  return (
    <div style={styles.node} onClick={() => console.log("clickity click")} />
  );
};

export default Node;
