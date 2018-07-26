let Flower = function () {};

let xiaoming = {
  sendFlower: function (target) {
    let flower = new Flower();
    target.receiveFlower(flower);
  },
};

let A = {
  receiveFlower: function (flower) {
    console.log(`收到花: ${flower}`);
  },
};

let B = {
  receiveFlower: function (flower) {
    A.receiveFlower(flower);
  },
};

xiaoming.sendFlower(B);