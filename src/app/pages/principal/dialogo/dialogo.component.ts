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

  tiendas_fav!: string[];

  constructor(private modal:PrincipalModalServicioService) {

  }
  ngOnInit() {
    this.modal.obtenerFavStore().subscribe(valor => {this.tiendas_fav = valor});
  }

  closeDialog(){
    this.modal.$modal_dialog.emit(false);
    this.modal.$modal_dialog2.emit(false);
    this.modal.$modal_dialog3.emit(false);

  }

  closeMarco(){
    if(this.marco){
      const resultado = this.tiendas_fav.filter(valor => valor != this.tiendas_fav[0]);
      this.modal.setFavStore(resultado);
      this.modal.SubirFavStore();
      this.modal.$modal_marco.emit(false);




    }
    if(this.marco2){
      const resultado = this.tiendas_fav.filter(valor => valor != this.tiendas_fav[1]);
      this.modal.setFavStore(resultado);
      this.modal.SubirFavStore();
      this.modal.$modal_marco2.emit(false);

    }
    if(this.marco3){
      const resultado = this.tiendas_fav.filter(valor => valor != this.tiendas_fav[2]);
      this.modal.setFavStore(resultado);
      this.modal.SubirFavStore();
      this.modal.$modal_marco3.emit(false);

    }
  }
}
