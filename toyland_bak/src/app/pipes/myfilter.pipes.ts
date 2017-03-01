import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "myFilter"
})

export class MyPipe implements PipeTransform {

    transform(value:any[], args:string[]):any {
        let filter:string = args[0] ? args[0].toLowerCase() : null;
        return filter ? value.filter(
            (param:any)=> param.name.toLowerCase().indexOf(filter)!=-1) : value;
    }
}