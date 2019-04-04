import { ingredients } from './ingredients';
export class recipe
{
    constructor(public name:string,public description:string,public imgUrl:string,public ingredient :ingredients[])
    {

    }
    
}