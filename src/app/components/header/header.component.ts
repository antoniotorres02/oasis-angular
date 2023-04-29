import {Component, OnInit, ViewChild} from '@angular/core';
import {PrincipalComponent} from "../../pages/principal/principal.component";
import {PrincipalModalServicioService} from "../../Services/principal-modal-servicio.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  principal!:boolean;
  constructor(private modal:PrincipalModalServicioService) {

  }
  ngOnInit() {
    this.modal.$modal_Cat.subscribe((valor) => {this.principal = valor});
  }

  openCategoria(){
    this.principal = true;
  }

  closeCaetegoria(){
    this.modal.$modal_Cat.emit(false);
  }
}
