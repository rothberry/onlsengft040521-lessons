let matrix = [
  [0, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
]

const doubleLoop = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    console.log(matrix[row])
    for (let col = 0; col < matrix[row].length; col++) {
      console.log(matrix[row][col])
    }
  }
}

doubleLoop(matrix)
