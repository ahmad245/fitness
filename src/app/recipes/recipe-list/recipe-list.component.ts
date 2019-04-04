import { RecipesService } from './../../services/recipes.service';
import { recipe } from './../../sheard/recipe';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

  @Output() sendItemSelectToRecipe=new EventEmitter();
  recipces:recipe[]=[];
  subscription:Subscription;

  constructor( private resipceService:RecipesService) { }

  ngOnInit() {
   this.recipces=this.resipceService.getRecipes();
      this.subscription= this.resipceService.changeRecipes.subscribe(data=>{this.recipces=data});
  }
  ngOnDestroy()
  {
  this.subscription.unsubscribe();
  }
  // resive(event)
  // {
  //   this.sendItemSelectToRecipe.emit(event);
  // }

}
