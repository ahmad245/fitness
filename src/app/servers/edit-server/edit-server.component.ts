import { ServerServiceService } from './../server-service.service';
import { Router, ActivatedRoute, CanActivate } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { CanDeactivaedGardInterface } from './can-deactivat-gard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanDeactivaedGardInterface {
server:{id:number,name:string,status:string};
serverName="";
serverStatus="";
alowed=0;
change:boolean=false;
  constructor(private router:Router,private service:ServerServiceService,private routerA:ActivatedRoute) { }
  
  ngOnInit() {
    
    this.routerA.paramMap.subscribe(data=>
      {
        this.server=this.service.getServerById(+data.get('id'));

      });
      this.routerA.queryParamMap.subscribe(data=>
        {
          this.alowed=+data.get('alowed');
        });
        this.serverName=this.server.name;
        this.serverStatus=this.server.status;
  }
  update()
  {
  this.service.updateServer(this.server.id,{name:this.serverName,status:this.serverStatus});
  this.change=true;
  this.router.navigate(['../'],{relativeTo:this.routerA});

  }
  canDeactivated()
  {
    if(!this.change && (this.serverName!==this.server.name||this.serverStatus!==this.server.status))
        {
              return confirm("ary you");
        }
        else
        {
          return true;
        }
  }

}
