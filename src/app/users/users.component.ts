import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[]=[{id:1,name:'ahmad'},{id:2,name:'bbbb'},{id:3,name:'ccccc'}]
  constructor(private route:ActivatedRoute,private rou:Router) { }

  ngOnInit() {
   
  }
  navigate(item:any)
  {
       this.rou.navigate([item.id,item.name],{relativeTo:this.route, queryParams:{retunUrl:item.name},fragment:'lll'});
  }
}
