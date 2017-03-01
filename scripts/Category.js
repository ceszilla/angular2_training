define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Category = (function () {
        function Category(category) {
            this.category = category;
        }
        Object.defineProperty(Category.prototype, "category", {
            get: function () {
                return this._category;
            },
            set: function (category) {
                if (category === undefined)
                    throw "Please supply valid category";
                this._category = category;
            },
            enumerable: true,
            configurable: true
        });
        return Category;
    }());
    exports.Category = Category;
});
