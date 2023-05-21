import {Component, OnInit, ViewChild} from '@angular/core';
import {PrincipalComponent} from "./pages/principal/principal.component";
import {Router} from "@angular/router";


import {PrincipalModalServicioService} from "./services/principal-modal-servicio.service";

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

  onActivate(event: Event) {
    // window.scroll(0,0);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
