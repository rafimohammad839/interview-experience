function getFlat(nestedArr) {
  let result = [];
  createFlat(nestedArr, result);
  return result;
}

function createFlat(nestedArr, result) {
  for (let i = 0; i < nestedArr.length; i++) {
    if (typeof nestedArr[i] !== "object") {
      result.push(nestedArr[i]);
    } else {
      createFlat(nestedArr[i], result);
    }
  }
}

var nestedArr = [
  1,
  2,
  3,
  [4, 5, [6, 7, [8, [9]]]],
  10,
  [22, 23, 25, [50, 55, 80]],
];

const flattenedArr = getFlat(nestedArr);
console.log(flattenedArr);
