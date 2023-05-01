import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Observable} from "rxjs";
import {collectionData} from "@angular/fire/firestore";

export interface ShopLogin {
  shop_id: string;
  shop_passwd: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShopLoginServiceService {

  shop_id: string = "" //Guarda el login de la tienda logueada
  constructor(private firestore: AngularFirestore) {
  }

  login(shop_login: ShopLogin ) {

  }
}
