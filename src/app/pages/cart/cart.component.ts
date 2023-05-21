import { Component,  OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { Observable } from "rxjs";

interface Product {
  name: string;
  description: string;
  picture:string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})


export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  printCart(){
    console.log(this.cartItems);
  }

  eliminarItem(productName: string) {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].name === productName) {
        this.cartItems.splice(i, 1);
        break; // Exit the loop after removing the item
      }
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  ngOnInit() {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      this.cartItems = JSON.parse(savedCartItems);
    }
  }
}
