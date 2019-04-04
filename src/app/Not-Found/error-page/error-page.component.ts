import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
messageError:string="";
  constructor(private routeA:ActivatedRoute) { }

  ngOnInit() {
    this.routeA.data.subscribe(data=>{this.messageError=data.message;console.log(data.message)})
    
  }

}
