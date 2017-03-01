import {Component} from '@angular/core';

@Component({
    selector: 'my-quote',
    template: `{{quoteString}}`
})

export class QuoteManager {
    quotes = [  "Happiness is a state of mind.", 
                "Happiness is as fleeting as change itself.", 
                "Happiness is a product of your constant thoughts.", 
                "Happiness is not for the faint of heart.", 
                "Happiness is great when shared with the people who matter."];
    
    quoteString:string;

    constructor() {
        this.generateQuote();
    }

    generateQuote() {
        var x:number;
        x = Math.floor(Math.random() * this.quotes.length);
        this.quoteString = this.quotes[x];
    }

}