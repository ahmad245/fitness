import { IserverArray } from './sheard/serverArray';
import { HttpServiceService } from './services/http-service.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import  'rxjs/Rx';
import { AuthServiceService } from './auth/auth-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ControlContainer, CheckboxControlValueAccessor, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Response } from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') controlss:NgForm;
  numbers:number[]=[1,2,3,4,5,6,7,8];
  odd:number[]=[1,3,5,7];
  even:number[]=[2,4,6,8];
  bool:boolean=false;
  title = 'app';
  aut:boolean=false;
  genderType=['male','female'];
  routFromHeader:string;
  pit:any[]=[{name:'ahmad',id:1},{name:'almasry',id:2}];
  singnUpForm:FormGroup;
  forbinding=['test','ah'];
  obs: Observable<any>;
  //serverArryy=[{id:this.getId, name:'ahmad',age:65},{id:this.getId, name:'ahjj',age:31},{id:this.getId, name:'kkk',age:31}];
  nameServer='';
  serverArry:IserverArray[];
  rrr:IserverArray;
  
  constructor(private serviceHttp:HttpServiceService)
  {}
 
ngOnInit()
{
  
}
addServerToFirebase()
{
  this.serviceHttp.storService(this.serverArry).subscribe(data=>
    {
      console.log(data);
      
    });
}
GetToFirebase()
{
  this.serviceHttp.getDataFromFirebase().subscribe(data=>
  {
    this.serverArry=data;
     console.log(data);
  })
}
private getId()
{
  return Math.round(Math.random()*10000);
}
addServer()
{
  this.rrr={id:1,name:'sfddf',age:32};
  this.serverArry.push(this.rrr);
}




 
  navigation(event)
  {
     this.routFromHeader=event;
  }

  
 

 
  
}



// const numberObser=Observable.interval(1000);
  // numberObser.subscribe(data=>{console.log(data)});

  // const oop=Observable.create((obser:Observer<string>)=>
  // {
  //   setTimeout(()=>{obser.next('ahmad1');},2000);
  //   setTimeout(() => { obser.next('ahmad2'); }, 4000);
  //   setTimeout(() => { obser.error('erorr'); }, 4000);
  //   setTimeout(() => { obser.complete(); },8000);
  //   setTimeout(() => { obser.next('ahmad3'); }, 6000);

  // });
  // oop.subscribe((data:string)=>{console.log(data);},
  //    (error:string)=>{console.log(error)},
  //               ()=>{console.log("complete");})