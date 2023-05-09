import {Component, Input, OnInit} from '@angular/core';
import {PrincipalModalServicioService} from "../../../Services/principal-modal-servicio.service";

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit{
  @Input() marco?:string;
  dialog!:boolean;
  dialog2!:boolean;
  dialog3!:boolean;
  constructor(private modal:PrincipalModalServicioService) {

  }
  ngOnInit() {
    this.modal.$modal_dialog.subscribe((valor) => {this.dialog = valor});
  }

  closeDialog(){
    this.modal.$modal_dialog.emit(false);
    this.modal.$modal_dialog2.emit(false);
    this.modal.$modal_dialog3.emit(false);
  }

  closeMarco(event:Event){
    this.modal.$modal_marco.emit(false);
    this.modal.$modal_marco2.emit(false);
    this.modal.$modal_marco3.emit(false);
  }
}
