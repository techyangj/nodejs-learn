const sum = (x1, x2) => x1 + x2;
const PI = 3.14;
class SomeMathObject {
  constructor() {
    console.log("object created");
  }
}

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;

module.exports = { sum, PI, SomeMathObject };
