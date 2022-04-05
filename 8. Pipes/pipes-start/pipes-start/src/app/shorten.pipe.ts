import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value: string, ...args: any[]) {
        if(value.length>10){
            return value.slice(args[0], args[1]) + ' ...';
        }
        else
            return value;
    }
}