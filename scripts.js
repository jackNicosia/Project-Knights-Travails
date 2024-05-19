function knightMoves(start, end) {
  if (start[0] === end[0] && start[1] === end[1])
    return { steps: [start], numSteps: 0 };

  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  let queue = [{ position: start, path: [start] }];
  let visited = new Set([start.toString()]);

  while (queue.length > 0) {
    let { position, path } = queue.shift(); // Dequeue the next position to explore

    for (let move of moves) {
      let nextPos = [position[0] + move[0], position[1] + move[1]];
      let nextPosStr = nextPos.toString();

      if (nextPos[0] === end[0] && nextPos[1] === end[1]) {
        // Found the end position, return the path and number of steps
        let finalPath = [...path, nextPos];
        return { steps: finalPath, numSteps: finalPath.length - 1 };
      }

      if (
        nextPos[0] >= 0 &&
        nextPos[0] < 8 &&
        nextPos[1] >= 0 &&
        nextPos[1] < 8 &&
        !visited.has(nextPosStr)
      ) {
        visited.add(nextPosStr);
        queue.push({ position: nextPos, path: [...path, nextPos] });
      }
    }
  }

  return { steps: [], numSteps: -1 }; // In case no path is found, which should not happen in a chessboard
}

console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([12, 11], [3, 3]));
/* 
levelOrder(callback = () => {}) {
    if (this.root === null) {
      return []; // Empty tree
    }

    const result = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();
      callback(current);
      result.push(current.val);

      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }

    return result;
  }

*/
