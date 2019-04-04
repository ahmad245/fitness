import { Injectable, EventEmitter } from '@angular/core';
import { ingredients } from '../sheard/ingredients';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  ingredients: ingredients[]=[{name:'apple',amount:50}];
  // changeIngradient=new EventEmitter();
  changeIngradient=new Subject<ingredients[]>();
  indexSubject=new Subject<number>();
  constructor() { }
  getIngredients()
  {
    return this.ingredients.slice();
  }
  getIngredientById(index:number)
  {
    return this.ingredients[index];
  }
  updateIngrediant(index:number,ing:ingredients)
  {
    
     this.ingredients[index]=ing;
    this.changeIngradient.next(this.ingredients.slice());
  }
  deletIngradiant(id:number)
  {
    this.ingredients.splice(id,1);
    this.changeIngradient.next(this.ingredients.slice());
  }
addIngredient(value)
{
  this.ingredients.push(value);
  this.changeIngradient.next(this.ingredients);
  // this.changeIngradient.emit(this.ingredients.slice());
  console.log(this.ingredients);
}
addIngredientsArray(ingrediantsArray:ingredients[])
{
  this.ingredients.push(...ingrediantsArray);
  this.changeIngradient.next(this.ingredients);
  // this.changeIngradient.emit(this.ingredients.slice());
}
}
