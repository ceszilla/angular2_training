import {Component} from '@angular/core';

@Component({
    selector: 'parent-app',
    templateUrl: '/app/views/parent.component.html'
})

export class ParentComponent {
    message:string;
    messageFromChild:string;

    sendMessage():void{
        this.message="hello from parent";
    }

    onChildClicked(message:string):void {
        this.messageFromChild=message;
    }
}