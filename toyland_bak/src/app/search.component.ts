import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'search-app',
    templateUrl: '/app/views/search.component.html',
    providers: [ ProductsService ]
})

export class SearchComponent implements OnInit {
    searchString:string = "";
    toys:any[];

    selectedName:string;
    selectedCode:string;
    selectedPrice:string;

    constructor(private _productsService:ProductsService) {
        this._productsService.getProducts()
            .subscribe((response:any[]) =>
            {
                this.toys = response;
                console.log(this.toys);
            }
            );
    }

    ngOnInit():void {
    }

    clickButton(toy:any) {
        if (toy.shown == "true")
            toy.shown = "false";
        else if (toy.shown == "false")
            toy.shown = "true";
    }

    clickImg(toy:any) {
        this.selectedName=toy.name;
        this.selectedCode=toy.code;
        this.selectedPrice=toy.price;
    }
}