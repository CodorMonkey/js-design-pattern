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
  listenGoodmood: function (fn) {
    setTimeout(function () {
      fn();
    }, 3000);
  },
};

let B = {
  receiveFlower: function (flower) {
    A.listenGoodmood(function () {
      A.receiveFlower(flower);
    });
  },
};

xiaoming.sendFlower(B);