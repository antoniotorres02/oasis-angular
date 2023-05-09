import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {PrincipalModalServicioService} from "../../Services/principal-modal-servicio.service";





@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})


export class PrincipalComponent implements OnInit{

  @Output() principalRefChange = new EventEmitter<boolean>();
  principalRef = true;
  modalSwitch!:boolean;
  CategoriaSwitch!:boolean;
  dialog!:boolean;
  dialog2!:boolean;
  dialog3!:boolean;
  marco_visible?: boolean;
  marco_visible2?: boolean;
  marco_visible3?: boolean;

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
    this.modal.$modal_marco.subscribe((valor) => {this.marco_visible = valor})
    this.modal.$modal_marco2.subscribe((valor) => {this.marco_visible2 = valor})
    this.modal.$modal_marco3.subscribe((valor) => {this.marco_visible3 = valor})
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

  openDialog(event:Event){
    switch ((event.target as HTMLAnchorElement).id) {
      case "1":{
        this.modal.$modal_dialog.emit(true);
        break;
      }
      case "2":{
        this.modal.$modal_dialog2.emit(true);
        break;
      }
      case "3":{
        this.modal.$modal_dialog3.emit(true);
        break;
      }
    }

  }
}
