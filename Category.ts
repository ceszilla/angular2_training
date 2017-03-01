export class Category {
    private _category:string

    constructor(category:string)
    {
        this.category = category;
    }

    get category():string {
        return this._category;
    }

    set category(category:string) {
        if (category === undefined)
            throw "Please supply valid category"
        
        this._category = category;
    }
    
}