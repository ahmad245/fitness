import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthServiceService,private router:Router) { }
  canActivate(rout:ActivatedRouteSnapshot,state:RouterStateSnapshot):Promise<boolean>
  {
    return this.auth.isAuthontication().then(data=>
      {
        if(data)
        {
          return true;
        }
        else
        {
          this.router.navigate(['/home']);
          
        }
      })
     
  }

}
