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


  addToCart(productName: string, productDescription: string, productPicture: string) {
    const product: Product = {
      name: productName,
      description: productDescription,
      picture: productPicture
    };
    this.cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }


  constructor() { }
}
