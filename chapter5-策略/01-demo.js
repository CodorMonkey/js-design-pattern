let calculateBonus = function (performance, salary) {
  switch (performance) {
    case 'S':
      return salary * 4;
    case 'A':
      return salary * 3;
    case 'B':
      return salary * 2;
  }
};

console.log(calculateBonus('S', 5000));
console.log(calculateBonus('A', 5000));
console.log(calculateBonus('B', 5000));