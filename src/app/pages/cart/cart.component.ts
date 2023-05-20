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
  ngOnInit() {
    this.cartService.getCartItems().subscribe(products => {
      this.cartItems = products;

    });
  }
}
