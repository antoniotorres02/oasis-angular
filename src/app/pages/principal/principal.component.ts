import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';





@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent{
  user: any;
  signedOut = false;

export class PrincipalComponent implements OnInit{

  @Output() principalRefChange = new EventEmitter<boolean>();
  principalRef = true;
  modalSwitch!:boolean;
  CategoriaSwitch!:boolean;

  constructor(private modal:PrincipalModalServicioService) {
  }

  ngOnInit() {
    this.modal.$modal.subscribe((valor) => {this.modalSwitch = valor})
    this.modal.$modal_Cat.subscribe((valor) => {this.CategoriaSwitch = valor})
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
}
