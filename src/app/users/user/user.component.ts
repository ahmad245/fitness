import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:{id:number,name:string};
  constructor(private rout:ActivatedRoute) { }

  ngOnInit() {
  
     this.user={id:+this.rout.snapshot.paramMap.get('id'),name:this.rout.snapshot.params['name']};
     
     this.rout.paramMap.subscribe(data=>
      {this.user={id:+data.get('id'),name:data.get('name')}  });
    //  this.rout.queryParamMap.subscribe(data=>{let q= data.get('url'); console.log(q);});
      this.rout.queryParamMap.subscribe(data=>console.log(data.get('retunUrl')));
      this.rout.fragment.subscribe(data=>{console.log(data+"fragment") });

      

  }

}
