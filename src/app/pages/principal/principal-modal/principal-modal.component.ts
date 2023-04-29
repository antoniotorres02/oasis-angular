import {Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {PrincipalModalServicioService} from "../../../Services/principal-modal-servicio.service";

@Component({
  selector: 'app-principal-modal',
  templateUrl: './principal-modal.component.html',
  styleUrls: ['./principal-modal.component.css']
})
export class PrincipalModalComponent {
  constructor(private modal:PrincipalModalServicioService) {
  }
  closeModal(){
    this.modal.$modal.emit(false);
  }

}
