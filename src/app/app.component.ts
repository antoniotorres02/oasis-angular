import {Component, ViewChild} from '@angular/core';
import {PrincipalComponent} from "./pages/principal/principal.component";
import {LoginComponent} from "./pages/login/login.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oasis-angular';
  nomuestranavbar: boolean;
  principal: PrincipalComponent;
  constructor() {
    this.principal = new PrincipalComponent();
    this.nomuestranavbar =  this.principal.navbar;
  }

  protected readonly LoginComponent = LoginComponent;
  protected readonly PrincipalComponent = PrincipalComponent;
}
