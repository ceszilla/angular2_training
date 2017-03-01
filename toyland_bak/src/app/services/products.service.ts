import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
        
        productsUrl:string="api/products.json";
        products:any[];

    constructor(private _http:Http) {
    }

    getProducts():Observable<any[]> {
        return this._http.get(this.productsUrl)
            .map((response:Response) =>
            this.products = response.json());
    }
}