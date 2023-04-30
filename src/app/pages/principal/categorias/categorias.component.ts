import { Component } from '@angular/core';
import {PrincipalModalServicioService} from "../../../Services/principal-modal-servicio.service";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  constructor(private modal:PrincipalModalServicioService) {
  }

  closeCaetegoria(){
    this.modal.$modal_Cat.emit(false);
  }
}
