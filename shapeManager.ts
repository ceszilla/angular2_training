import {Square} from './Square';

export class shapeManager
{
    constructor()
    {
        var mySquare = new Square(5,5);
        mySquare.computeArea(); 
    }
}

var myShapeManager = new shapeManager();
