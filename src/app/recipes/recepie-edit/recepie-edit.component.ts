import { recipe } from './../../sheard/recipe';
import { RecipesService } from './../../services/recipes.service';
import { ShoppingListService } from './../../services/shopping-list.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ingredients } from '../../sheard/ingredients';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {
model=false;
id:number;
form:FormGroup;
integradiant:recipe;

  constructor(private routeA:ActivatedRoute ,private servicRecipes:RecipesService) { }

  ngOnInit() {
    this.routeA.paramMap.subscribe(data=>
      {
    this.id=+data.get('id');
   
      if(data.get('id')!==null)
      {
        this.model=true;
        this.integradiant=this.servicRecipes.getRecipeByName(this.id);
      }
      else
      {
        this.model=false;
        this.integradiant={name:'',imgUrl:'',description:'',ingredient:[]}
      }
      
      });
      this.intForm();
  }


  addRespice()
  {
    if(!this.model)
   {this.servicRecipes.addRecipe(this.form.value);} 
    else
   { this.servicRecipes.updateRecipe(this.id,this.form.value);}
  }
  addIngrediant()
  {
    
    (<FormArray>this.form.get('ingrediants')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,Validators.required)
      })
    );
  }
   daletIng(i:number)
  {
     (<FormArray>this.form.get('ingrediants')).removeAt(i);
  }
  private intForm()
  {
    let integArr=new FormArray([]);
    for(let intg of this.integradiant.ingredient)
    {
     integArr.push(
       new FormGroup({'name':new FormControl(intg.name),'amount':new FormControl(intg.amount)})
    );
    };
    this.form=new FormGroup(
      {
        
       'name':new FormControl(this.integradiant.name,Validators.required),
       'img':new FormControl(this.integradiant.imgUrl,Validators.required),
       'description':new FormControl(this.integradiant.description,Validators.required),
       'ingrediants':integArr
      });
     
  }

}
