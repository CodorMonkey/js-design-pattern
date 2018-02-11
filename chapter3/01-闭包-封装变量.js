var cache = {}
var mult = function () {
  var key = Array.prototype.join.call(arguments, ',')
  if (cache[key]) {
    console.log('cache')
    return cache[key]
  }
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a *= arguments[i]
  }
  return cache[key] = a
}

console.log(mult(2, 3))
console.log(mult(2, 3))

/** 闭包版 **/
var mult2 = (function () {
  var cache = {}
  return function () {
    var key = Array.prototype.join.call(arguments, ',')
    if (cache[key]) {
      console.log('cache')
      return cache[key]
    }
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
      a *= arguments[i]
    }
    return cache[key] = a
  }
})()

console.log(mult2(2, 3))
console.log(mult2(2, 3))