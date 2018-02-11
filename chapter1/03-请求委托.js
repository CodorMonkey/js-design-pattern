var A = {name: 'monkey'}

var B = function () {

}
B.prototype = A

/**
 * 1.首先，尝试遍历对象 a 中的所有属性，但没有找到 name 这个属性。
 * 2.查找 name 属性的这个请求被委托给对象 a 的构造器的原型，它被 a.__proto__ 记录着并且
 * 指向 A.prototype，而 A.prototype 被设置为对象 obj。
 * 3.在对象 obj 中找到了 name 属性，并返回它的值。
 */
var b = new B()
console.log(b.name)