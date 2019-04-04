import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private active:Router,private authser:AuthServiceService,private rout:ActivatedRoute) { }

  ngOnInit() {
  }
doSomeThing()
{

  this.active.navigate(['/users']);
}
login()
{
this.authser.login();
}
logout()
{
  this.authser.logOut();
}
}
