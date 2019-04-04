import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ingredients } from '../../sheard/ingredients';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   @ViewChild('Form') form:NgForm;
  ref:ingredients={name:"",amount:null};
  checkAddOrUpdate=false;
  indexOfIngredient:number;

  constructor(private soppingService:ShoppingListService) { }

  ngOnInit() {
    this.soppingService.indexSubject.
    subscribe(data=>
      {
        this.indexOfIngredient=data;
     const ing=   this.soppingService.getIngredientById(data);
        this.ref.name=ing.name;
        this.ref.amount=ing.amount;
        this.checkAddOrUpdate=true;
      })
  }
  onSubmit(form:NgForm)
  {
    if(this.checkAddOrUpdate)
    {
      this.soppingService.updateIngrediant(this.indexOfIngredient,this.ref);
      this.checkAddOrUpdate=false;
    }
    else
   { this.soppingService.addIngredient(form.value);}
  
     this.checkAddOrUpdate=false;
   form.setValue(this.ref={name:'',amount:null});
  
  }
  delet()
  {
    this.soppingService.deletIngradiant(this.indexOfIngredient);
   this.clear();
  }
  clear()
  {
    this.form.reset();
    this.checkAddOrUpdate=false;
  //  this.form.setValue(this.ref={name:'',amount:null});
  }
}
