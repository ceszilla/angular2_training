define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //namespace Shapes
    //{
    var Square = (function () {
        function Square(height, width) {
            this.height = height;
            this.width = width;
        }
        Square.prototype.computeArea = function () {
            console.log("Area is " + this.height * this.width);
        };
        return Square;
    }());
    exports.Square = Square;
});
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
