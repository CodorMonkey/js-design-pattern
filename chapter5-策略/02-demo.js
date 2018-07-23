let performanceS = function (salary) {
  return salary * 4;
};

let performanceA = function (salary) {
  return salary * 3;
};

let performanceB = function (salary) {
  return salary * 2;
};

let calculateBonus = function (performance, salary) {
  switch (performance) {
    case 'S':
      return performanceS(salary);
    case 'A':
      return performanceA(salary);
    case 'B':
      return performanceB(salary);
  }
};

console.log(calculateBonus('S', 5000));
console.log(calculateBonus('A', 5000));
console.log(calculateBonus('B', 5000));