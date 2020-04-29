const arr = [5, 4, 1, 6, 3];

////////////////////////////////
// MAP
///////////////////////////////
Array.prototype.map = function (callback) {
  console.log('MY MAP');

  const retVal = [];
  for (let i = 0; i < this.length; i++) {
    retVal[i] = callback(this[i], index);
  }
  return retVal;
};
console.log(arr.map((element) => ++element));

////////////////////////////////
// REDUCE
///////////////////////////////
Array.prototype.reduce = function (callback, accumulator) {
  console.log('MY REDUCE');

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};
console.log(arr.reduce((accumulator, element) => accumulator + element, 0));

////////////////////////////////
// FILTER
///////////////////////////////
Array.prototype.filter = function (callback) {
  console.log('MY FILTER');

  const retVal = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) && retVal.push(this[i]);
  }
  return retVal;
};
console.log(arr.filter((element) => element > 1));

////////////////////////////////
// SORT
///////////////////////////////
Array.prototype.sort = function (callback) {
  console.log('MY SORT');

  const retVal = [...this]; //make copy of array so as not to change it
  for (let i = 0; i < retVal.length; i++) {
    for (let j = 0; j < retVal.length - 1; j++) {
      if (callback(retVal[j], retVal[j + 1]) > 0) {
        const temp = retVal[j + 1];
        retVal[j + 1] = retVal[j];
        retVal[j] = temp;
      }
    }
  }
  return retVal;
};

console.log(arr.sort((current, next) => current - next));
