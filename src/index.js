exports.min = function min (array) {
  if (typeof array === "undefined" || array.length === 0) return 0;
  return Math.min(...array);
}

exports.max = function max (array) {
  if (typeof array === "undefined" || array.length === 0) return 0;
  return Math.max(...array);
}

exports.avg = function avg (array = []) {
  if(typeof array === "undefined" || array.length === 0) return 0;

  let sum = array.reduce((sum, item) => {
    return sum + item;
  }, 0)

  return sum / array.length;
}
