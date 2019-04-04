import { Server } from './resolve.service';
import { ServerServiceService } from './../server-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
server:Server;
  constructor(
    private rout:ActivatedRoute,
    private serverService:ServerServiceService,
  private router:Router) { }

  ngOnInit() {
    
     this.rout.data.subscribe(data=>
      {this.server=data['data']});
    
      //  this.rout.paramMap.subscribe(data=>
      //   {
      //     let id=+data.get('id');
      //     let serverby=this.serverService.getServerById(id);
      //     this.server={id:serverby.id,name:serverby.name,status:serverby.status};

      //   })
     }
     relativToEdit()
     {
   this.router.navigate(['edit'],{relativeTo:this.rout,queryParamsHandling:'preserve'});
     }

}
