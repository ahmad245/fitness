import { RecipesService } from './../../../services/recipes.service';
import { recipe } from './../../../sheard/recipe';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() item:recipe;
@Input() index:number;
  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
  }
  onSelect()
  {
  //  this.recipeService.recipeSelect.emit(this.item);
    //  this.sendSeletedTolist.emit();
  }
}
