import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login: boolean;
  constructor() {
    this.login = false;
  }

  ngOnInit() {
    return true;
  }

  get navbar(): boolean{
    return this.login;
  }



}
