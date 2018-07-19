function Person (name) {
  this.name = name
}

Person.prototype.hello = function () {
  console.log('My name is ' + this.name)
};

let p = new Person('monkey');
p.hello();
console.log(p);

let objectFactory = function () {
  let obj = {};
  let Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  let result = Constructor.apply(obj, arguments);
  return typeof result === 'object' ? result : obj
};

let p2 = objectFactory(Person, 'monkey2');
console.log(p2);
p2.hello();
console.log(Object.getPrototypeOf(p2) === Person.prototype);
