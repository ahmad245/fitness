import { PipeTransform, Pipe } from "@angular/core";
@Pipe(
    {
        name:'shorten'
    })
export class shrtenPipe implements PipeTransform
{
    transform(value:string,param:any)
    {
        if(value.length>2)
        {
           return value.substring(0,param)+' ....';
        }
        else
        {
            return value;
        }
    }
}