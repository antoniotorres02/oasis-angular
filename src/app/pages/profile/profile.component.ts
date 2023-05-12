import {Component, Input, OnInit} from '@angular/core';
import {Firestore, collection, collectionData, doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDoc } from "firebase/firestore";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  pedidosCargado: boolean = true;
  pedidosCompletosCargado: boolean = false;
  wishlist: boolean = false;
  soporteCargado: boolean = false;
  configuracionCargado: boolean = false;

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


  //fin Datos usuarios


  //fin variables usuario
  public userFirebase: any;

  arrayAux: (&boolean[]) = [this.pedidosCargado, this.pedidosCompletosCargado, this.wishlist, this.soporteCargado, this.configuracionCargado];
  constructor(private firestore: Firestore, public auth: AngularFireAuth){
    this.auth.authState.subscribe(user => {
      console.log(this.actualuser$);
      this.user = user;
      if (this.user) {
        this.getUserData(this.user);
      }
    });
  }


  async getUserData(user: any) {
    const userDocRef = doc(this.firestore, `Usuarios/${user?.uid}`);
    const userDocCardsRef = doc(this.firestore, `Usuarios/${user?.uid}/cards/cardsList`);

    const userDocSnapshot = await getDoc(userDocRef);
    const userDocCardShot = await getDoc(userDocCardsRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const userCard:any =  userDocCardShot.data();

      console.log(userData);
      console.log(userCard);
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
      console.log(this.card1);
    } else {
      console.log('El usuario no existe.');
    }
  }

  public cargarComponente(currentDisplay: number) {
    this.arrayAux[this.current] = false;
    this.arrayAux[currentDisplay] = true;
    this.current = currentDisplay;
    console.log(this.arrayAux[currentDisplay]);
  }
}
