module.exports = {
  forEach(arr, fn) {
    for (let element of arr) {
      fn(element);
    }
  }
};
