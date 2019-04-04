import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed=false;
 @Output() routeTo=new EventEmitter();
  constructor() { }


  ngOnInit() {
  }
routToApp(route:string)
{
     this.routeTo.emit(route);
}

toggleChange()
{
  this.isCollapsed=!this.isCollapsed
}
}
