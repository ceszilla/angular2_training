import { Component, Input } from '@angular/core';

@Component({
    selector: 'details-app',
    templateUrl: 'app/views/details.component.html'
})

export class DetailsComponent{

    @Input() code:string;
    @Input() price:string;
    @Input() name:string;
    
}