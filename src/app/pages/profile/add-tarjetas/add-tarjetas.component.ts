import {Component, OnInit} from '@angular/core';
import {PrincipalModalServicioService} from "../../../services/principal-modal-servicio.service";
import {DocumentData} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-add-tarjetas',
  templateUrl: './add-tarjetas.component.html',
  styleUrls: ['./add-tarjetas.component.css']
})
export class AddTarjetasComponent implements OnInit{

  tarjetas!:DocumentData;
  Datos:string[] = ["","","","", "black"];
  cambio = false;

  constructor(private modal:PrincipalModalServicioService) {
  }

  ngOnInit() {
    this.modal.obtenerCards().subscribe(valor => {this.tarjetas = valor});
  }


  Mastercard(){
    this.Datos[0] = "MasterCard";
  }
  Visa(){
    this.Datos[0] = "Visa";
  }

  Anadir(){
    if(this.Datos[0] != "" && this.Datos[1] != "" && this.Datos[2] != "" && this.Datos[3] != ""){
      if(this.tarjetas["card1"].length == 0 && !this.cambio){
        this.tarjetas["card1"][0] = this.Datos[0];
        this.tarjetas["card1"][1] = this.Datos[1];
        this.tarjetas["card1"][2] = this.Datos[2];
        this.tarjetas["card1"][3] = this.Datos[3];
        this.tarjetas["card1"][4] = this.Datos[4];
        this.modal.setCards(this.tarjetas);
        this.modal.Editartarjeta();
        this.modal.$modal_add_tarjeta.emit(false);
        this.cambio = true;
      }
      if(this.tarjetas["card2"].length == 0 && !this.cambio){
        this.tarjetas["card2"][0] = this.Datos[0];
        this.tarjetas["card2"][1] = this.Datos[1];
        this.tarjetas["card2"][2] = this.Datos[2];
        this.tarjetas["card2"][3] = this.Datos[3];
        this.tarjetas["card2"][4] = this.Datos[4];
        this.modal.setCards(this.tarjetas);
        this.modal.Editartarjeta();
        this.modal.$modal_add_tarjeta.emit(false);
        this.cambio = true;
      }
      if(this.tarjetas["card3"].length == 0 && !this.cambio){
        this.tarjetas["card3"][0] = this.Datos[0];
        this.tarjetas["card3"][1] = this.Datos[1];
        this.tarjetas["card3"][2] = this.Datos[2];
        this.tarjetas["card3"][3] = this.Datos[3];
        this.tarjetas["card3"][4] = this.Datos[4];
        this.modal.setCards(this.tarjetas);
        this.modal.Editartarjeta();
        this.modal.$modal_add_tarjeta.emit(false);
        this.cambio = true;
      }
      if(this.tarjetas["card4"].length == 0 && !this.cambio){
        this.tarjetas["card4"][0] = this.Datos[0];
        this.tarjetas["card4"][1] = this.Datos[1];
        this.tarjetas["card4"][2] = this.Datos[2];
        this.tarjetas["card4"][3] = this.Datos[3];
        this.tarjetas["card4"][4] = this.Datos[4];
        this.modal.setCards(this.tarjetas);
        this.modal.Editartarjeta();
        this.modal.$modal_add_tarjeta.emit(false);
        this.cambio = true;
      }
      if(this.tarjetas["card5"].length == 0 && !this.cambio){
        this.tarjetas["card5"][0] = this.Datos[0];
        this.tarjetas["card5"][1] = this.Datos[1];
        this.tarjetas["card5"][2] = this.Datos[2];
        this.tarjetas["card5"][3] = this.Datos[3];
        this.tarjetas["card5"][4] = this.Datos[4];
        this.modal.setCards(this.tarjetas);
        this.modal.Editartarjeta();
        this.modal.$modal_add_tarjeta.emit(false);
        this.cambio = true;
      }
    }
  }
  Cerrar(){
    this.modal.$modal_add_tarjeta.emit(false);
  }
}
