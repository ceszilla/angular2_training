define(["require", "exports", "./Square"], function (require, exports, Square_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shapeManager = (function () {
        function shapeManager() {
            var mySquare = new Square_1.Square(5, 5);
            mySquare.computeArea();
        }
        return shapeManager;
    }());
    exports.shapeManager = shapeManager;
    var myShapeManager = new shapeManager();
});
