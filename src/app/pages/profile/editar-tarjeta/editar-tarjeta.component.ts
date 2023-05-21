import {Component, OnInit} from '@angular/core';
import {PrincipalModalServicioService} from "../../../Services/principal-modal-servicio.service";
import {DocumentData} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-editar-tarjeta',
  templateUrl: './editar-tarjeta.component.html',
  styleUrls: ['./editar-tarjeta.component.css']
})
export class EditarTarjetaComponent implements OnInit{

  tarjetas!:DocumentData;
  Datos:string[] = ["","",""];
  dialogo_tarjetas!:boolean[];
  constructor(private modal:PrincipalModalServicioService) {
  }

  ngOnInit() {
    this.modal.obtenerCards().subscribe(valor => {this.tarjetas = valor});
    this.modal.obtenerDialogTarjetas().subscribe(valor => {this.dialogo_tarjetas = valor});
  }


  Editar(){
    if(this.Datos[0] != "" && this.Datos[1] != "" && this.Datos[2] != ""){
      if(this.dialogo_tarjetas[0]){
        this.tarjetas["card1"][1] = this.Datos[0];
        this.tarjetas["card1"][2] = this.Datos[1];
        this.tarjetas["card1"][3] = this.Datos[2];
        this.modal.setCards(this.tarjetas);
        this.modal.Editartarjeta();
        this.modal.$dialogo_tarjeta.next([false,false,false,false,false]);
      }
      if(this.dialogo_tarjetas[1]){
        this.tarjetas["card2"][1] = this.Datos[0];
        this.tarjetas["card2"][2] = this.Datos[1];
        this.tarjetas["card2"][3] = this.Datos[2];
        this.modal.setCards(this.tarjetas);
        this.modal.Editartarjeta();
        this.modal.$dialogo_tarjeta.next([false,false,false,false,false]);
      }
      if(this.dialogo_tarjetas[2]){
        this.tarjetas["card3"][1] = this.Datos[0];
        this.tarjetas["card3"][2] = this.Datos[1];
        this.tarjetas["card3"][3] = this.Datos[2];
        this.modal.setCards(this.tarjetas);
        this.modal.Editartarjeta();
        this.modal.$dialogo_tarjeta.next([false,false,false,false,false]);
      }
      if(this.dialogo_tarjetas[3]){
        this.tarjetas["card4"][1] = this.Datos[0];
        this.tarjetas["card4"][2] = this.Datos[1];
        this.tarjetas["card4"][3] = this.Datos[2];
        this.modal.setCards(this.tarjetas);
        this.modal.Editartarjeta();
        this.modal.$dialogo_tarjeta.next([false,false,false,false,false]);
      }
      if(this.dialogo_tarjetas[4]){
        this.tarjetas["card5"][1] = this.Datos[0];
        this.tarjetas["card5"][2] = this.Datos[1];
        this.tarjetas["card5"][3] = this.Datos[2];
        this.modal.setCards(this.tarjetas);
        this.modal.Editartarjeta();
        this.modal.$dialogo_tarjeta.next([false,false,false,false,false]);
      }
    }
  }

  Cerrar(){
    this.modal.$editar_tarjeta.emit(false);
    this.modal.$dialogo_tarjeta.next([false,false,false,false,false]);
  }

}
