define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Quote = (function () {
        function Quote(category) {
            this.predicates = ["is a state of mind.",
                "is as fleeting as change itself.",
                "is a product of your constant thoughts.",
                "is not for the faint of heart.",
                "is great when shared with the people who matter."];
            this.category = category;
            this.subject = category.category;
            this.predicate = this.generatePredicate();
        }
        Quote.prototype.generatePredicate = function () {
            var x;
            x = Math.floor(Math.random() * 10);
            if (x >= 5)
                x = x - 5;
            return this.predicates[x];
        };
        return Quote;
    }());
    exports.Quote = Quote;
});
