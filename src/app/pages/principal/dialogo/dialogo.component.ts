import {Component, Input, OnInit} from '@angular/core';
import {PrincipalModalServicioService} from "../../../Services/principal-modal-servicio.service";

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit{
  @Input() marco?:boolean;
  @Input() marco2?:boolean;
  @Input() marco3?:boolean;

  constructor(private modal:PrincipalModalServicioService) {

  }
  ngOnInit() {
  }

  closeDialog(){
    this.modal.$modal_dialog.emit(false);
    this.modal.$modal_dialog2.emit(false);
    this.modal.$modal_dialog3.emit(false);
  }

  closeMarco(){
    if(this.marco){
      this.modal.$modal_marco.emit(false);
    }
    if(this.marco2){
      this.modal.$modal_marco2.emit(false);
    }
    if(this.marco3){
      this.modal.$modal_marco3.emit(false);

    }
  }
}
