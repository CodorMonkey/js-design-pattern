let Plane = function () {
  this.blood = 100;
  this.attackLevel = 1;
  this.defenceLevel = 1
};

let plane = new Plane();
plane.blood = 500;
plane.attackLevel = 5;
plane.defenceLevel = 3;

let clonePlane = Object.create(plane);
for (let key in clonePlane) {
  console.log(`${key}: ${clonePlane[key]}`)
}

console.log(clonePlane.constructor);

console.log(Plane.prototype);