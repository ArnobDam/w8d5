Function.prototype.inherits = function (superClass) {

    // function Surrogate() { }
    // Surrogate.prototype = superClass.prototype;
    // this.prototype = new Surrogate();
    // this.prototype.constructor = this;

    this.prototype = Object.create(superClass.prototype);
}

function MovingObject() { }
MovingObject.prototype.test = function () {
    console.log("hello")
}
function Ship() { }
Ship.inherits(MovingObject);

let ship1 = new Ship();
ship1.test();

function Asteroid() { }
Asteroid.inherits(MovingObject);

