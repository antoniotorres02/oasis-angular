import {Component, Input, OnInit} from '@angular/core';
import {Firestore, collection, collectionData, doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDoc } from "firebase/firestore";
import {ShipmentAddress} from "../../../interfaces/shipment-address";
import {DialogService} from "../../Services/dialog-service.service";
import {DocumentData} from "@angular/fire/compat/firestore";
import {PrincipalModalServicioService} from "../../Services/principal-modal-servicio.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  pedidosCargado: boolean = true;
  pedidosCompletosCargado: boolean = false;
  wishlist: boolean = false;
  soporteCargado: boolean = false;
  configuracionCargado: boolean = false;

  dialogoAbierto!: boolean;

  current: number = 0;
  user: any;
  actualuser$: Observable<any[]> | null = null; // inicializando con null

  /* variables del usuario*/

  nombreUser?: string;
  registrationDate?: string;
  wishlistCount?: string;
  orderCount?: string;
  ordersInProgress?: string;

  name?: string | undefined;
  lastName?: string | undefined;

  //datos de usuario
  card1?: string[] = [];
  tarjetas!:DocumentData;
  editar_tarjetas!:boolean;
  add_tarjeta!:boolean;

  //fin Datos usuarios
  //Direcciones de envio
  addresses: ShipmentAddress[] = [];

  public userFirebase: any;

  arrayAux: (&boolean[]) = [this.pedidosCargado, this.pedidosCompletosCargado, this.wishlist, this.soporteCargado, this.configuracionCargado];
  constructor(private firestore: Firestore, public auth: AngularFireAuth, private dialogService: DialogService, private modal:PrincipalModalServicioService){
    this.auth.authState.subscribe(user => {
      //console.log(this.actualuser$);
      this.user = user;
      if (this.user) {
        this.getUserData(this.user);
      }
    });
  }


  async getUserData(user: any) {
    const userDocRef = doc(this.firestore, `Usuarios/${user?.uid}`);
    const userDocCardsRef = doc(this.firestore, `Usuarios/${user?.uid}/cards/cardsList`);
    const userDocSARef = doc(this.firestore, `Usuarios/${user?.uid}/cards/shippingAddresses`);

    const userDocSnapshot = await getDoc(userDocRef);
    const userDocCardShot = await getDoc(userDocCardsRef);
    const userDocSAShot = await getDoc(userDocSARef);
    console.log(userDocSARef);
    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const userCard:any =  userDocCardShot.data();
      const userSA:Record<string, string | string[]> = userDocSAShot.data() ?? {};


      for (const campo of Object.entries(userSA)) {
        //console.log(`${campo}: ${valor}`);
        const cosa: string[] = campo[1] as string[];
        this.cargarDireccion(cosa);
      }
      console.log(this.addresses);

      this.nombreUser = userData["usuario"];
      this.registrationDate = userData["registrationDate"];
      this.wishlistCount = userData["wishlist"];
      this.orderCount = userData["orderCount"];
      this.ordersInProgress = userData["ordersInProgress"];

      this.name = userData["name"];
      this.lastName = userData["lastName"];

      //datos usuario
      this.name = userData["name"];
      this.lastName = userData["lastName"];

      //tarjeta?
      this.card1 = userCard["card1"];

    } else {
      console.log('El usuario no existe.');
    }
  }


  public cargarComponente(currentDisplay: number) {
    this.arrayAux[this.current] = false;
    this.arrayAux[currentDisplay] = true;
    this.current = currentDisplay;

  }

  public cargarDireccion(datosDireccion: String[]){
    const sAaux: ShipmentAddress = {
      name: datosDireccion[0],
      lastName: datosDireccion[1],
      dni: datosDireccion[2],
      phoneNumber: datosDireccion[3],
      alias: datosDireccion[4],
      shipmentAddress: datosDireccion[5],
      additionalInformation: datosDireccion[6],
      zipCode: datosDireccion[7],
      population: datosDireccion[8],
      province: datosDireccion[9]
    }

    this.addresses?.push(sAaux);
  }

  ngOnInit() {
    this.dialogService.$dialogoAbierto.subscribe(valor => {this.dialogoAbierto = valor});
    this.modal.obtenerCards().subscribe(valor => {this.tarjetas = valor});
    this.modal.$editar_tarjeta.subscribe(valor => {this.editar_tarjetas = valor});
    this.modal.$modal_add_tarjeta.subscribe(valor =>{this.add_tarjeta = valor});
  }

  openDialog(){
    this.dialogService.$dialogoAbierto.emit(true);
    console.log(this.dialogoAbierto);
  }



}
