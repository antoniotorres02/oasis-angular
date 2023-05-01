import {Component, OnInit} from '@angular/core';
import {PrincipalModalServicioService} from "../../../Services/principal-modal-servicio.service";

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit{
  dialog!:boolean;
  dialog2!:boolean;
  dialog3!:boolean;
  constructor(private modal:PrincipalModalServicioService) {

  }
  ngOnInit() {
    this.modal.$modal_dialog.subscribe((valor) => {this.dialog = valor})
  }

  closeDialog(){
    this.modal.$modal_dialog.emit(false);
    this.modal.$modal_dialog2.emit(false);
    this.modal.$modal_dialog3.emit(false);
  }

  closeMarco(){
    if(this.dialog){
      this.modal.$modal_marco.emit(false);
    }

  }
}
