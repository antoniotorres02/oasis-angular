import {Component, OnInit} from '@angular/core';
import {PrincipalModalServicioService} from "../../../Services/principal-modal-servicio.service";
import {DocumentData} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-opciones-tarjeta',
  templateUrl: './opciones-tarjeta.component.html',
  styleUrls: ['./opciones-tarjeta.component.css']
})
export class OpcionesTarjetaComponent implements OnInit{

  tarjetas!:DocumentData;
  dialogo_tarjetas!:boolean[];
  constructor(private modal: PrincipalModalServicioService) {
  }

  ngOnInit() {
    this.modal.obtenerCards().subscribe(valor => {this.tarjetas = valor});
    this.modal.obtenerDialogTarjetas().subscribe(valor => {this.dialogo_tarjetas = valor})
  }

  closeDialog(){
    if(this.dialogo_tarjetas[0]){
      this.tarjetas["card1"][0] = "MasterCard";
      this.modal.setCards(this.tarjetas);
      this.modal.Editartarjeta();
      this.modal.$dialogo_tarjeta.next([false,false,false,false,false]);
    }
    this.modal.$dialogo_tarjeta.next([false,false,false,false,false]);
  }

}
