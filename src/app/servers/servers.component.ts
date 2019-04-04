import { Router, ActivatedRoute } from '@angular/router';
import { ServerServiceService } from './server-service.service';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
servers:{id:number,name:string,status:string}[]=[];
aut:{};

  constructor(private serverService:ServerServiceService,
    private route:Router,
    private routA:ActivatedRoute,
 ) { }

  ngOnInit() {
   this.servers= this.serverService.getServers();
   
  }
  // loadToServe(item)
  // {
  //   this.route.navigate([item.id],{relativeTo:this.routA})
  // }

}
