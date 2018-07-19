let cache = {};
let mult = function () {
  let key = Array.prototype.join.call(arguments, ',');
  if (cache[key]) {
    console.log('cache');
    return cache[key]
  }
  let a = 1;
  for (let i = 0, l = arguments.length; i < l; i++) {
    a *= arguments[i]
  }
  return cache[key] = a
};

console.log(mult(2, 3));
console.log(mult(2, 3));

/** 闭包版 **/
let mult2 = (function () {
  let cache = {};

  function calculate () {
    let a = 1;
    for (let i = 0, l = arguments.length; i < l; i++) {
      a *= arguments[i]
    }
    return a
  }

  return function () {
    let key = Array.prototype.join.call(arguments, ',');
    if (cache[key]) {
      console.log('cache');
      return cache[key]
    }
    return cache[key] = calculate.apply(null, arguments)
  }
})();

console.log(mult2(2, 3));
console.log(mult2(2, 3));