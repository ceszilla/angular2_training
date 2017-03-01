class Greeter
{
    message:string;
    constructor(message:string)
    {
        this.message = message;
    }

    greet()
    {
        console.log("Hello " + this.message);
    }
}

//var firstApp = new Greeter("Ces");
//firstApp.greet();

//import Square = Shapes.Square;
//var mySquare = new Square(5,5);
//mySquare.computeArea();

//import Circle = Shapes.Circle;
//var myCircle = new Circle(6);
//myCircle.computeArea();

