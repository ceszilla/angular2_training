import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'child-app',
    templateUrl: 'app/views/child.component.html'
})

export class ChildComponent {
    @Input() message:string;

    @Output() childClicked:EventEmitter<string> = new EventEmitter<string>();

    sendToParent():void {
        this.childClicked.emit('hello from child');
    }
}