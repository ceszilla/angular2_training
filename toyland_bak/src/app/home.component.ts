import {Component} from '@angular/core';

@Component({
    selector: 'home-app',
    templateUrl: '/app/views/home.component.html',
})

export class HomeComponent {
    toys:any[]=[
        {
            name: "La La Loopsy",
            code: "10001",
            imgUrl: `http://3.bp.blogspot.com/-0Xcq2u6H24g/TxmFFsj7XrI/AAAAAAAABhs/sBHLTIp3BVA/s1600/13401635.jpg`,
            imgH: "150",
            imgW: "150"
        },
        {
            name: "Pokemon",
            code: "10002",
            imgUrl: `http://static.tumblr.com/7f29ffaf86b50f900abb60ef7021edfe/izmj1iu/Q5Inz03u3/tumblr_static_70kt88zhd0so4g84koowgwow.png`,
            imgH: "150",
            imgW: "150"
        }
    ]

    searchString:string="searchValue";

    toggleImage() {
        alert(`searchString is now ${this.searchString}`);
    }
}