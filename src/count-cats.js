module.exports = function countCats(arr) {
  let amount = 0;
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      if (arr[i][j] == '^^') {
        amount++;
      }
    }
  }
  return amount;
};
