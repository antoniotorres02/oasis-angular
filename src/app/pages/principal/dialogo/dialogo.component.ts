import { Component } from '@angular/core';
import {PrincipalModalServicioService} from "../../../services/principal-modal-servicio.service";

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {
  constructor(private modal:PrincipalModalServicioService) {
  }
  closeDialog(){
    this.modal.$modal_dialog.emit(false);
    this.modal.$modal_dialog2.emit(false);
    this.modal.$modal_dialog3.emit(false);
  }

}
