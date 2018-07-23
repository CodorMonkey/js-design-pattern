let performanceS = function () {
};
performanceS.prototype.calculate = function (salary) {
  return salary * 4;
};

let performanceA = function () {
};
performanceA.prototype.calculate = function (salary) {
  return salary * 3;
};

let performanceB = function () {
};
performanceB.prototype.calculate = function (salary) {
  return salary * 2;
};

function Bonus (salary, strategy) {
  this.salary = salary;
  this.strategry = strategy;
}

Bonus.prototype.setSalary = function (salary) {
  this.salary = salary;
};
Bonus.prototype.setStrategy = function (strategy) {
  this.strategry = strategy;
};
Bonus.prototype.calculateBonus = function () {
  return this.strategry.calculate(this.salary);
};


let bonus = new Bonus();
bonus.setSalary(5000);

bonus.setStrategy(new performanceS());
console.log(bonus.calculateBonus());

bonus.setStrategy(new performanceA());
console.log(bonus.calculateBonus());

bonus.setStrategy(new performanceB());
console.log(bonus.calculateBonus());