import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecepieEditComponent } from './recepie-edit/recepie-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecepieStrartComponent } from './recepie-strart/recepie-strart.component';

const route:Routes=[
    {path:'',component:RecipesComponent,
       children:[
        {path:'edit',component:RecepieEditComponent},
        {path:'edit/:id',component:RecepieEditComponent},
        {path:':id',component:RecipeDetailComponent},
       {path:'',component:RecepieStrartComponent}]},
]
@NgModule(
    {
       
        imports:[RouterModule.forChild(route)],
        exports:[RouterModule],

    })
export class recipeRouteModule
{}