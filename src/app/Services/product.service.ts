import { Injectable } from '@angular/core';
import {Firestore, query, setDoc, where} from "@angular/fire/firestore";
import {collection, collectionData, doc, docData, getDoc, getDocs} from "@angular/fire/firestore";
import {filter, Observable} from "rxjs";
import {Product} from "../../interfaces/product";
import {ShopService} from "./shop.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private firestore: Firestore, private shopService: ShopService) {
  }

  getAllProducts(): Observable<Product[]>{
    const products = collection(this.firestore,'products');
    return collectionData(products, {idField: 'id'}) as Observable<Product[]>;
  }

  getProduct(id: string): Observable<Product>{
    const product = doc(this.firestore, 'products', id);
    return docData(product) as Observable<Product>;
  }

  getProductsByShopId(shopId: string): Observable<Product[]> {
    const products = collection(this.firestore, 'products');
    const q = query(products, where("shopId", "==", shopId));
    return collectionData(q) as Observable<Product[]>
  }

  async addProductToShop(shopId: string, product: Product): Promise<void> {
    `//TODO: add product to shop in firebase`
    await setDoc(doc(this.firestore, 'products', product.productId), product);
  }


}
