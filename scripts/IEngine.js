var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.start = function () {
        console.log("Engine is starting");
    };
    Truck.prototype.stop = function () {
        console.log("Engine is stopping");
    };
    return Truck;
}());
var Jet = (function () {
    function Jet() {
    }
    Jet.prototype.start = function () {
        console.log("Plane Engine is starting");
    };
    Jet.prototype.stop = function () {
        console.log("Plane Engine is stopping");
    };
    Jet.prototype.fly = function () {
        console.log("Plane Engine is flying");
    };
    Jet.prototype.glide = function () {
        console.log("Plane Engine is gliding");
    };
    return Jet;
}());
var plane = new Jet();
plane.start();
plane.glide();
plane.fly();
plane.stop();
