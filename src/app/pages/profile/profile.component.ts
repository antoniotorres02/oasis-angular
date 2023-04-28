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

  arrayAux: (&boolean[]) = [this.pedidosCargado, this.pedidosCompletosCargado, this.wishlist, this.soporteCargado, this.configuracionCargado];
  constructor(private firestore: Firestore, public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      this.user = user;
      if (this.user) {
        const aCollection = collection(this.firestore, "Usuarios");
        const userDocRef = doc(this.firestore, `Usuarios/${this.user.id}`);
        async getUserData() {
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            console.log(userData);
          } else {
            console.log('El usuario no existe.');
          }
        }
      }
    });
  }



  getById = async (coll: string, id: string) => {
    const docRef = doc(this.firestore, coll, id);
    const docSnap = await getDoc(docRef);
    return { ...docSnap.data(), id: docSnap.id };
  };


  public cargarComponente(currentDisplay: number) {
    this.arrayAux[this.current] = false;
    this.arrayAux[currentDisplay] = true;
    this.current = currentDisplay;
    console.log(this.arrayAux[currentDisplay]);
  }
}
