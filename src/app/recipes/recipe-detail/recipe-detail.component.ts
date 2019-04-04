import { ActivatedRoute } from '@angular/router';
import { ingredients } from './../../sheard/ingredients';
import { recipe } from './../../sheard/recipe';
import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 routerId:number;
 selectedRecip:recipe={name:'',description:'',imgUrl:"",ingredient:[]};
  constructor(private recipesServies:RecipesService ,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.
    subscribe(data=>
      {
        this.routerId=+data.get('id');
        this.selectedRecip=this.recipesServies.getRecipeByName(+data.get('id'));
      })
// this.recipesServies.recipeSelect.subscribe(data=> this.selectedRecip= data)
  }
  addtoshoppingList()
  {
    
    this.recipesServies.addRecipToShoping(this.selectedRecip.ingredient);
   
  }
  deleteRecipe()
  {
    this.recipesServies.remove(this.routerId);
  }

}
