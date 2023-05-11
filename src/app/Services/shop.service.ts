import { Injectable } from '@angular/core';
import {collection, doc, Firestore, getDoc, getDocs} from "@angular/fire/firestore";
import {Shop} from "../../interfaces/shop";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private emptyShop: Shop= {
    id: '',
    name: '',
    email: '',
    login_id: '',
    passwd: '',
    products: []
  }

  constructor(private firestore: Firestore) { }

  async getShops(): Promise<any> {
    let docsSnap = await getDocs(collection(this.firestore, 'shops'));
  }

  async getShop(id: string): Promise<Shop> {
    let docSnap = await getDoc(doc(this.firestore, 'shops', id));
    if (docSnap.exists()) {
      return docSnap.data() as Shop;
    } else {
      console.log("No such document!: " + id);
    }
    return this.emptyShop;
  }
}
