import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {PrincipalModalServicioService} from "../../../Services/principal-modal-servicio.service";

@Component({
  selector: 'app-principal-modal',
  templateUrl: './principal-modal.component.html',
  styleUrls: ['./principal-modal.component.css']
})
export class PrincipalModalComponent {
  @Output() messageEvent = new EventEmitter<string>();
  @Input() html!:string;
  constructor(private modal:PrincipalModalServicioService) {
  }
  closeModal(){
    this.modal.$modal.emit(false);
  }
  sethtml(){

    this.html = 'hola';
    this.messageEvent.emit(this.html);
  }
}
