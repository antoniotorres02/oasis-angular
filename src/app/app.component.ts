import {Component, OnInit, ViewChild} from '@angular/core';
import {PrincipalComponent} from "./pages/principal/principal.component";
import {Router} from "@angular/router";
import {PrincipalModalServicioService} from "./Services/principal-modal-servicio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild(PrincipalComponent) principal!: PrincipalComponent;
  principalRef = true;

  constructor(private router: Router) {
    this.principal = new PrincipalComponent(new PrincipalModalServicioService());
    this.principalRef = this.principal.principalRef;
  }

  GetPrincipal(){
    return this.router.url;
  }

}
