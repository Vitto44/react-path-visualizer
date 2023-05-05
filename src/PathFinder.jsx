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
  return (
    <div>
      <h1>PathFinder</h1>
    </div>
  );
};

export default PathFinder;
