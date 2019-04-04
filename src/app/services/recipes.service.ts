import { recipe } from './../sheard/recipe';
import { Injectable, EventEmitter } from '@angular/core';
import { ingredients } from '../sheard/ingredients';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipesService {
  changeRecipes=new Subject<recipe[]>();
  recipces:recipe[]=
  [
    new recipe(
      "ahmad",
      "any description","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9XFhYQPlIem5zUf5zUdg7WpAtegKKtpAlG0VtMXL7CnifMqV",
      [{name:"apple",amount: 5},{name:"orange",amount: 3}]
    ),
    new recipe(
      "almasry",
      "Last description","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9XFhYQPlIem5zUf5zUdg7WpAtegKKtpAlG0VtMXL7CnifMqV",
      [{name:"bread",amount: 7},{name:"rie",amount: 4}]
    )

  ];
  constructor(private shoppingServic:ShoppingListService)
  {

  }
  // recipeSelect=new EventEmitter<recipe>();

  getRecipes()
  {
    return this.recipces.slice();
  }
  addRecipe(recipe:recipe)
  {
         this.recipces.push(recipe);
         this.changeRecipes.next(this.recipces.slice());
  }
  updateRecipe(id:number,newRecipe:recipe)
  {
    this.recipces[id]=newRecipe;
    this.changeRecipes.next(this.recipces.slice());
  }
  remove(id)
  {
    this.recipces.splice(id,1);
    this.changeRecipes.next(this.recipces.slice());
  }
   addRecipToShoping(integrideantsArray:ingredients[])
   {
      this.shoppingServic.addIngredientsArray(integrideantsArray);
   }
   getRecipeByName(index:number)
   {
   return  this.recipces.slice()[index];
   }
  

}
