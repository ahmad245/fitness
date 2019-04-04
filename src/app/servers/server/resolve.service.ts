import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ServerServiceService } from '../server-service.service';
export interface Server
{
  id:number;
  name:string;
  status:string;
}
@Injectable()
export class ResolveService implements Resolve<Server>{

  constructor(private service:ServerServiceService) { }

  resolve(router:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Server> | Promise<Server>|Server
  {
    return  this.service.getServerById(+router.paramMap.get('id'));

  }
}
