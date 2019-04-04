import { HomeRecipeComponent } from './home-recipe/home-recipe.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
 import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
// import { RecepieStrartComponent } from './recipes/recepie-strart/recepie-strart.component';
// import { RecepieEditComponent } from './recipes/recepie-edit/recepie-edit.component';
const route:Routes=
[    
    {path:'',component:HomeRecipeComponent},
    {path:'recipes',loadChildren: './recipes/recipe.module#recipeModule'}
    // {path:'',redirectTo:'/recipes',pathMatch:'full'},
    // {path:'recipes',component:RecipesComponent,
    //    children:[
    //     {path:'edit',component:RecepieEditComponent},
    //     {path:'edit/:id',component:RecepieEditComponent},
    //     {path:':id',component:RecipeDetailComponent},
    //    {path:'',component:RecepieStrartComponent}]},
    // {path:'shopping-list',component:ShoppingListComponent},
    
   
]

@NgModule(
    {
      imports:[RouterModule.forRoot(route,{preloadingStrategy:PreloadAllModules})],
      exports:[RouterModule]

    })
export class AppRoutingModule
{

}