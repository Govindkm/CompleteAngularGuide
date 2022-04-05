import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: [], ...args: string[]): unknown {
    debugger;
    return value.sort((a, b)=>{
      if(a[args[0]]<b[args[0]])
        return 1;
      else 
        return -1;
    })
  }

}
