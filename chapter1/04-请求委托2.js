function A () {
  this.a = 'a'
}

A.prototype = {name: 'Monkey'};

function B () {

}

B.prototype = new A();
B.prototype.constructor = B;

let b = new B();
console.log(b.name);
console.log(b.a);

console.log(b.__proto__);
console.log(b.__proto__.constructor);
console.log(b.__proto__ === B.prototype);