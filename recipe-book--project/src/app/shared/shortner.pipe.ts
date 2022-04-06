import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortner'
})

export class ShortTextPipe implements PipeTransform {
    transform(value: string, ...args: any[]): any {
        const [start=0, stop=30] = args;
        return value.slice(start, stop)+' ...';
    }
}