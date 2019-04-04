import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EditServerComponent } from './edit-server.component';

export interface CanDeactivaedGardInterface
{
  canDeactivated:()=>Observable<boolean> |Promise<boolean>|boolean;
}

@Injectable()
export class CanDeactivatGardService implements CanDeactivate<CanDeactivaedGardInterface> {

  constructor() { }
  canDeactivate(component:CanDeactivaedGardInterface)
  {
    return component.canDeactivated();
  }

}
// @Injectable()
// export class CanDeactivatGardService implements CanDeactivate<EditServerComponent> {

//   constructor() { }
//   canDeactivate(component:EditServerComponent)
//   {
//     if(!component.change && (component.serverName!==component.server.name||component.serverStatus!==component.server.status))
//     {
//           return confirm("ary you");
//     }
//     else
//     {
//       return true;
//     }
//   }

// }

