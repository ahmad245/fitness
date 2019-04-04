import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],param:string): any {
      
    if(param.length===0 || param==='')
    {
         return value;
    }
    return value.filter(a=> a.name.includes(param));
  }

}
