import { Component } from '@angular/core';
import {PrincipalComponent} from "./pages/principal/principal.component";
import {LoginComponent} from "./pages/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oasis-angular';
  principal: object= PrincipalComponent;
  login: object= LoginComponent;
  constructor() {
    let array: Array<object> = [this.principal, this.login];
  }

}
