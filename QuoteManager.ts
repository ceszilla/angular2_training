import {Category} from './Category';
import {Quote} from './Quotes';

export class QuoteManager {
    category:Category;
    generatedQuote:Quote;

    constructor(category:Category) {
        this.category = category;
    }

    generateQuote() {
        this.generatedQuote = new Quote(this.category);
        console.log(`Your generated quote is: "${this.generatedQuote.subject} ${this.generatedQuote.predicate}"`);
    }
}

var myQuoteManager = new QuoteManager(new Category("Happiness"));
myQuoteManager.generateQuote();
myQuoteManager.generateQuote();
myQuoteManager.generateQuote();
myQuoteManager.generateQuote();
myQuoteManager.generateQuote();

var myQuoteManager2 = new QuoteManager(new Category("Loneliness"));
myQuoteManager2.generateQuote();
myQuoteManager2.generateQuote();
myQuoteManager2.generateQuote();
myQuoteManager2.generateQuote();
myQuoteManager2.generateQuote();