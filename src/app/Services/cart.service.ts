import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Product {
  name: string;
  description: string;
  picture:string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  addToCart(productName: string, productDescription: string, productPicture: string) {
    const product: Product = {
      name: productName,
      description: productDescription,
      picture: productPicture
    };
    this.cartItems.push(product);
    this.cartItemsSubject.next(this.cartItems);
    console.log('Cart items in subject:', this.cartItemsSubject.value);
  }


  getCartItems(): Observable<Product[]> {
  return this.cartItemsSubject.asObservable();
  }

  constructor() { }
}
