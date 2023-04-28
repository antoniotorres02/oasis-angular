import { Component } from '@angular/core';
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

  nombreUser?: string;
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
    const userDocSnapshot = await getDoc(userDocRef);
    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      console.log(userData);
      this.nombreUser = userData["Usuario"];
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
