import { Injectable } from '@angular/core';
import {collection, collectionData, doc, docData, Firestore, getDoc, getDocs} from "@angular/fire/firestore";
import {Shop} from "../../interfaces/shop";
import {Observable} from "rxjs";
import {docChanges} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private emptyShop: Shop = {
    id: '',
    name: '',
    email: '',
    login_id: '',
    passwd: '',
    image: '',
    products: []
  }

  constructor(private firestore: Firestore) { }

  getShops(): Observable<Shop[]> {
    const shops = collection(this.firestore, 'shops');
    return collectionData(shops, { idField: 'id' }) as Observable<Shop[]>;
  }

  getShop(id: string): Observable<Shop> {
    const shop = doc(this.firestore, 'shops', id);
    return docData(shop) as Observable<Shop>;
  }

  async appendProductReferenceToShop() {
    //TODO: append product reference to shop in firebase

  }


}
