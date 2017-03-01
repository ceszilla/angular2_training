import {Category} from './Category'

export class Quote {
    category:Category;
    subject:string;
    predicate:string;
    predicates = [  "is a state of mind.", 
                    "is as fleeting as change itself.", 
                    "is a product of your constant thoughts.", 
                    "is not for the faint of heart.", 
                    "is great when shared with the people who matter."];
    
    constructor(category:Category) {
        this.category = category;
        this.subject = category.category;
        this.predicate = this.generatePredicate();
    }

    generatePredicate():string {
        var x:number;
        x = Math.floor(Math.random() * 10);
        if (x >= 5)
            x = x - 5;
        return this.predicates[x];
    }

}

