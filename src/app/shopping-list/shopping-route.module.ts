import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";
const routs:Routes=[  {path:'shopping-list',component:ShoppingListComponent},]

@NgModule(
    {
        exports:[RouterModule],
        imports:[RouterModule.forChild(routs)]
    })
export class shoppingRoutModule
{}