import { shoppingRoutModule } from './shopping-route.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule(
    {
        declarations:[
            ShoppingListComponent,
            ShoppingEditComponent,],
       
        imports:[
            CommonModule,
            shoppingRoutModule,
             NgbModule.forRoot(),
             FormsModule
            ]
    })
export class shoppingModule
{}