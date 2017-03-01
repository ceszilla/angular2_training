define(["require", "exports", "./Category", "./Quotes"], function (require, exports, Category_1, Quotes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QuoteManager = (function () {
        function QuoteManager(category) {
            this.category = category;
        }
        QuoteManager.prototype.generateQuote = function () {
            this.generatedQuote = new Quotes_1.Quote(this.category);
            console.log("Your generated quote is: \"" + this.generatedQuote.subject + " " + this.generatedQuote.predicate + "\"");
        };
        return QuoteManager;
    }());
    exports.QuoteManager = QuoteManager;
    var myQuoteManager = new QuoteManager(new Category_1.Category("Happiness"));
    myQuoteManager.generateQuote();
    myQuoteManager.generateQuote();
    myQuoteManager.generateQuote();
    myQuoteManager.generateQuote();
    myQuoteManager.generateQuote();
    var myQuoteManager2 = new QuoteManager(new Category_1.Category("Loneliness"));
    myQuoteManager2.generateQuote();
    myQuoteManager2.generateQuote();
    myQuoteManager2.generateQuote();
    myQuoteManager2.generateQuote();
    myQuoteManager2.generateQuote();
});
