import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {PrincipalModalServicioService} from "../../../Services/principal-modal-servicio.service";

@Component({
  selector: 'app-principal-modal',
  templateUrl: './principal-modal.component.html',
  styleUrls: ['./principal-modal.component.css']
})
export class PrincipalModalComponent {
  @Output() messageEvent = new EventEmitter<string>();
  html =
    '          <div class="marco">\n' +
    '            <a [routerLink]="[\'/shop\', {img: \'foot_locker.svg\'}]"><img src="./assets/IMG/foot_locker.svg" alt=""></a>\n' +
    '          </div>\n' +
    '          <a (click)="openDialog($event)"><img src="./assets/IMG/tres_puntos.svg" class="option" title ="Opciones" id="1"></a>\n' +
    '          <div class="dialogo" *ngIf="dialog == true">\n' +
    '            <app-dialogo [marco]="this.marco_visible"></app-dialogo>\n' +
    '          </div>\n';

  constructor(private modal:PrincipalModalServicioService) {
  }

  setData(datos:string){
    this.modal.setData(datos);
  }
  closeModal(){
    this.modal.$modal.emit(false);
  }
  sethtml(){
    this.messageEvent.emit(this.html);
  }
}
