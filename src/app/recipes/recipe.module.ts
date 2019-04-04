import { recipeRouteModule } from './recipe-route.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecepieStrartComponent } from './recepie-strart/recepie-strart.component';
import { RecepieEditComponent } from './recepie-edit/recepie-edit.component';
import { shrtenPipe } from '../pipes/shorten.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule(
    {
        declarations:
        [
            RecipesComponent,
            RecipeListComponent,
            RecipeItemComponent,
            RecipeDetailComponent,
            RecepieStrartComponent,
            RecepieEditComponent,
            shrtenPipe,
        ],
        exports:[
       
        ],
        imports:[
             CommonModule,
              recipeRouteModule,
             ReactiveFormsModule,
             NgbModule.forRoot()
            ]
    })
export class recipeModule
{

}