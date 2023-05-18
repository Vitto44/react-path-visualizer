import { nodeStyle } from "../styles";

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

const Node = ({
  num,
  mode,
  setMatrix,
  status,
  disabledChoice,
  isMouseDown,
  setIsMouseDown,
}) => {
  const handleOnClick = () => {
    !disabledChoice &&
      setMatrix((prev) => {
        if (mode === 1 || mode === 0) {
          const newMatrix = [...prev];
          newMatrix.forEach((node) => {
            if (node.status === mode) {
              node.status = 3;
            }
          });
          newMatrix[num].status = mode;
          return newMatrix;
        } else if (status === 3 || status === 4 || status === 2) {
          const newMatrix = [...prev];
          newMatrix[num].status = mode;
          setIsMouseDown(!isMouseDown);
          return newMatrix;
        }
        return prev;
      });
  };

  const handleOnMouseEnter = () => {
    if (mode === 2 || mode === 3) {
      if (status === 3 || status === 4 || status === 2) {
        !disabledChoice &&
          isMouseDown &&
          setMatrix((prev) => {
            const newMatrix = [...prev];
            newMatrix[num].status = mode;
            return newMatrix;
          });
      }
    }
  };

  return (
    <div
      style={{ ...nodeStyle, backgroundColor: getColor(status) }}
      onClick={handleOnClick}
      onMouseEnter={handleOnMouseEnter}
    />
  );
};

export default Node;
