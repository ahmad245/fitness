import { ingredients } from './../sheard/ingredients';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 
  ingredients: ingredients[]=[];
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
this.ingredients=this.shoppingService.getIngredients();
this.shoppingService.changeIngradient.subscribe(data=>this.ingredients=data);
  }
  SendIndex(index:number)
  {
     this.shoppingService.indexSubject.next(index);
  }
 

}
