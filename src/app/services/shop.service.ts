import { Injectable } from '@angular/core';
import {collection, collectionData, doc, docData, Firestore, getDoc, getDocs} from "@angular/fire/firestore";
import {initializeShop, Shop} from "../../interfaces/shop";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {docChanges} from "@angular/fire/compat/firestore";
import {Question} from "../../interfaces/question";
import {Info} from "../../interfaces/info";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private emptyShop: Shop = initializeShop()

  constructor(private firestore: Firestore, private db: AngularFirestore) { }

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

  addFaqToShop(shopId: string, question: string, answer: string) {
    let shopRef = this.db.collection('shops').doc(shopId)
    let id = this.db.createId()
    this.db.collection('shops').doc(shopId).collection('faqs').doc(id).set({
      id: id,
      question: question,
      answer: answer
    })
  }

  getFaqs(shopId: string): Observable<Question[]> {
    const faqs = collection(this.firestore, 'shops', shopId, 'faqs');
    return collectionData(faqs, { idField: 'id' }) as Observable<Question[]>;
  }

  deleteFaq(shopId: string, questionId: string) {
    this.db.collection('shops').doc(shopId).collection('faqs').doc(questionId).delete()
  }

  applyInfo(shopid: string, info: Info) {
    this.db.collection('shops').doc(shopid).update({
      info: info
    })
  }
}
