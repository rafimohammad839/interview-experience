// Note: Swapping would only work if the matrix is n x n
// In other cases, you can take another result array
function printTranspose(arr) {
  let rows = arr.length;
  let cols = arr[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = i; j < cols; j++) {
      swap(arr, i, j);
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i][j];
  arr[i][j] = arr[j][i];
  arr[j][i] = temp;
}

var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
/*[
    [1, 5, 9, 13]
    [2, 6, 10, 14]
    [3, 7, 11, 15]
    [4, 8, 12, 16]
  ]
*/

console.log(printTranspose(arr));
