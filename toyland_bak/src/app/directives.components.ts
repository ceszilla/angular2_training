import {Component} from '@angular/core';

@Component({
    selector: 'directives-app',
    templateUrl: '/app/views/directives.component.html'
})

export class DirectiveComponent {

    toys:any[]=[
        {
            name: "Lala Loopsy",
            code: "10001",
            price: "$25"
        },
        {
            name: "Pokemon",
            code: "10002",
            price: "$50"
        }
    ];

    showMe:boolean;
    searchString:string;

    constructor() {
        this.setShowMe(true);
        this.setSearchString("pokemon");
    }

    setShowMe(showMe:boolean){
        this.showMe = showMe;
    }

    setSearchString(searchString:string) {
        this.searchString = searchString;
        alert(`searchString is ${this.searchString}`);
    }

}