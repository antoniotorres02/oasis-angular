import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProfileComponent} from "../profile.component";
import {Firestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {PrincipalModalServicioService} from "../../../services/principal-modal-servicio.service";
import {first} from "rxjs";
import {DocumentData} from "@angular/fire/compat/firestore";
import {object} from "@angular/fire/database";

@Component({
  selector: 'app-linked-cards',
  templateUrl: './linked-cards.component.html',
  styleUrls: ['./linked-cards.component.css']
})
export class LinkedCardsComponent implements OnInit{
  @Input() card?: string[];
  dialogo_tarjeta!:boolean[];
  tarjetas!:DocumentData;
  capacidad = ["1","2","3","4","5"];
  constructor(private modal: PrincipalModalServicioService) {


  }

  ngOnInit() {
    this.modal.obtenerDialogTarjetas().subscribe(valor => {this.dialogo_tarjeta = valor});
    this.modal.obtenerCards().subscribe(valor => {this.tarjetas = valor});
  }

  openAddTarjeta(){
    this.modal.$modal_add_tarjeta.emit(true);
  }

  openDialog(event:Event){
    switch ((event.target as HTMLDivElement).id){
      case "1":{
        this.dialogo_tarjeta.fill(false);
        this.dialogo_tarjeta[0] = true;
        this.modal.$dialogo_tarjeta.next(this.dialogo_tarjeta);
        break;
      }

      case "2":{
        this.dialogo_tarjeta.fill(false);
        this.dialogo_tarjeta[1] = true;
        this.modal.$dialogo_tarjeta.next(this.dialogo_tarjeta);
        break;
      }

      case "3":{
        this.dialogo_tarjeta.fill(false);
        this.dialogo_tarjeta[2] = true;
        this.modal.$dialogo_tarjeta.next(this.dialogo_tarjeta);
        break;
      }

      case "4":{
        this.dialogo_tarjeta.fill(false);
        this.dialogo_tarjeta[3] = true;
        this.modal.$dialogo_tarjeta.next(this.dialogo_tarjeta);
        break;
      }

      case "5":{
        this.dialogo_tarjeta.fill(false);
        this.dialogo_tarjeta[4] = true;
        this.modal.$dialogo_tarjeta.next(this.dialogo_tarjeta);
        break;
      }

    }

  }



  protected readonly parseInt = parseInt;
}
