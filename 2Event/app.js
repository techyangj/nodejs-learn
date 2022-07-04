const EventEmitter = require('events');
const { prependOnceListener } = require('process');
const eventEmitter = new EventEmitter();

// eventEmitter.on("tutorial", () => {
//   console.log("tutorial event has occurred");
// })

// eventEmitter.emit("tutorial");


eventEmitter.on("tutorial", (num1,num2) => {
  console.log(num1 + num2);
})

eventEmitter.emit("tutorial", 1, 2)


class Person extends EventEmitter {
  constructor(name){
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let pedro = new Person("Pedro");

pedro.on("name",() => {
  console.log("my name is " + pedro._name);
})

pedro.emit("name");

