function Person (name) {
  this.name = name
}

Person.prototype.hello = function () {
  console.log('My name is ' + this.name)
}

var p = new Person('monkey')
p.hello()
console.log(p)

var objectFactory = function () {
  var obj = {}
  var Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  var result = Constructor.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}

var p2 = objectFactory(Person, 'monkey2')
console.log(p2)
p2.hello()
console.log(Object.getPrototypeOf(p2) === Person.prototype)
