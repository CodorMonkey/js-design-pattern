var A = function () {

}
A.prototype = {name: 'Monkey'}

var B = function () {

}
B.prototype = new A()

var b = new B()
console.log(b.name)

console.log(b.__proto__)
console.log(b.constructor)
console.log(b.__proto__ === b.constructor.prototype)