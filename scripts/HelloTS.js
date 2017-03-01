var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello " + this.message);
    };
    return Greeter;
}());
//var firstApp = new Greeter("Ces");
//firstApp.greet();
//import Square = Shapes.Square;
//var mySquare = new Square(5,5);
//mySquare.computeArea();
//import Circle = Shapes.Circle;
//var myCircle = new Circle(6);
//myCircle.computeArea();
