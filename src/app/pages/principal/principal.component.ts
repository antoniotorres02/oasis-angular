import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {PrincipalModalServicioService} from "../../services/principal-modal-servicio.service";
import {opacity} from "../../animations/animation";





@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  animations: [ opacity ]
})
export class PrincipalComponent implements OnInit{

  @Output() principalRefChange = new EventEmitter<boolean>();
  principalRef = true;
  modalSwitch!:boolean;
  CategoriaSwitch!:boolean;
  dialog!:boolean;
  dialog2!:boolean;
  dialog3!:boolean;
  user: any;
  signedOut = false;

  constructor(private modal:PrincipalModalServicioService) {
  }

  ngOnInit() {
    this.modal.$modal.subscribe((valor) => {this.modalSwitch = valor})
    this.modal.$modal_Cat.subscribe((valor) => {this.CategoriaSwitch = valor})
    this.modal.$modal_dialog.subscribe((valor) => {this.dialog = valor})
    this.modal.$modal_dialog2.subscribe((valor) => {this.dialog2 = valor})
    this.modal.$modal_dialog3.subscribe((valor) => {this.dialog3 = valor})
  }

  setPrincipal() {
    this.principalRef = false;
    this.principalRefChange.emit(this.principalRef);
  }


  openModal(){
    this.modalSwitch = true;
  }

  openCategoria(){
    this.CategoriaSwitch = true;
  }
  closeCaetegoria(){
    this.modal.$modal_Cat.emit(false);
  }

  openDialog(){
    this.modal.$modal_dialog.emit(true);
  }
  openDialog2(){
    this.modal.$modal_dialog2.emit(true);
  }
  openDialog3(){
    this.modal.$modal_dialog3.emit(true);
  }

  closeDialog(){
    this.modal.$modal_dialog.emit(false);
  }
}
