import { Injectable } from '@angular/core';
@Injectable()
export class AuthServiceService {
log:boolean=false;
  constructor() { }
  login()
  {
    this.log=true;
    }
    logOut()
    {
      this.log=false;
  
    }
  isAuthontication()
  {
    const promis=new Promise((resolve,reject)=>
    {
 
          setTimeout(() => { resolve(this.log)}, 800);
    });
    return promis;
  }
  
    

}
