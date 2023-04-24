import {Component, OnInit, ViewChild} from '@angular/core';
import {PrincipalComponent} from "./pages/principal/principal.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild(PrincipalComponent) principal!: PrincipalComponent;
  principalRef = true;

  constructor(private router: Router) {
    this.principal = new PrincipalComponent();
    this.principalRef = this.principal.principalRef;
  }

  GetPrincipal(){
    return this.router.url;
  }

}
