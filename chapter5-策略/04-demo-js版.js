let strategies = {
  'S': function (salary) {
    return salary * 4;
  },
  'A': function (salary) {
    return salary * 3;
  },
  'B': function (salary) {
    return salary * 2;
  },
};


let calculateBonus = function (performance, salary) {
  return strategies[performance](salary);
};

console.log(calculateBonus('S', 5000));
console.log(calculateBonus('A', 5000));
console.log(calculateBonus('B', 5000));