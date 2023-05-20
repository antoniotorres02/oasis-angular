import {Component, Input, OnInit} from '@angular/core';
import {PrincipalModalServicioService} from "../../../Services/principal-modal-servicio.service";

@Component({
  selector: 'app-marcos',
  templateUrl: './marcos.component.html',
  styleUrls: ['./marcos.component.css']
})
export class MarcosComponent implements OnInit{

  tiendas_fav!:string[];
  dialog!:boolean;
  dialog2!:boolean;
  dialog3!:boolean;
  marco_visible!: boolean;
  marco_visible2!: boolean;
  marco_visible3!: boolean;
  constructor(private modal:PrincipalModalServicioService) {
  }

  ngOnInit() {
    this.modal.obtenerFavStore().subscribe(valor => {this.tiendas_fav = valor});
    this.modal.$modal_dialog.subscribe((valor) => {this.dialog = valor});
    this.modal.$modal_dialog2.subscribe((valor) => {this.dialog2 = valor});
    this.modal.$modal_dialog3.subscribe((valor) => {this.dialog3 = valor});
    this.modal.$modal_marco.subscribe((valor) => {this.marco_visible = valor});
    this.modal.$modal_marco2.subscribe((valor) => {this.marco_visible2 = valor});
    this.modal.$modal_marco3.subscribe((valor) => {this.marco_visible3 = valor});
  }

  openDialog(event:Event){
    switch ((event.target as HTMLAnchorElement).id) {
      case "1":{
        this.modal.$modal_dialog.emit(true);
        this.modal.$modal_marco.emit(true);
        this.modal.$modal_dialog2.emit(false);
        this.modal.$modal_dialog3.emit(false);
        break;
      }
      case "2":{
        this.modal.$modal_dialog2.emit(true);
        this.modal.$modal_dialog.emit(false);
        this.modal.$modal_dialog3.emit(false);
        this.modal.$modal_marco2.emit(true);
        break;
      }
      case "3":{
        this.modal.$modal_dialog3.emit(true);
        this.modal.$modal_dialog2.emit(false);
        this.modal.$modal_dialog.emit(false);
        this.modal.$modal_marco3.emit(true);
        break;
      }
    }

  }

}
