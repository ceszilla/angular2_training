//namespace Shapes
//{
    export class Square
    {
        height:number;
        width:number;
        constructor(height:number, width:number)
        {
            this.height = height;
            this.width = width;
        }
        computeArea():void
        {
            console.log(`Area is ${this.height * this.width}`);
        }
    }

    //var square = new Square(5, 5);
//}

//import Square = Shapes.Square;
//var mySquare = new Square(5,5);
//mySquare.computeArea();

//namespace Shapes
//{
  //  export class Circle
  //  {
  //      diameter:number;
  //      constructor(diameter:number)
  //      {
  //          this.diameter = diameter;
  //      }
  //      computeArea():void
  //      {
  //          console.log(`Area is ${this.diameter * 3.14}`);
  //      }
  //  }
//}