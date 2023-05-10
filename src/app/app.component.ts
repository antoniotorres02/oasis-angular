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

  principalRef = true;
  title: any;

  constructor(private router: Router) {

  }

  GetPrincipal(){
    return this.router.url;
  }

}
