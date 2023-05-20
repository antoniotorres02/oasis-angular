import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {filter, Observable} from "rxjs";
import {collectionData} from "@angular/fire/firestore";
import {ShopService} from "./shop.service";
import {Shop} from "../../interfaces/shop";
import {Router} from "@angular/router";

export interface ShopLogin {
  shop_id: string;
  shop_passwd: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShopLoginServiceService {

  shop_id: string = "" //Guarda el login de la tienda logueada
  constructor(private firestore: AngularFirestore, private shopService: ShopService, private router: Router) { }

  login(shop_login: ShopLogin) {
    //TODO: login shop in firebase
    this.shopService.getShops().subscribe((shops) => {
      shops.forEach((shop: Shop) => {
        if (shop.login_id == shop_login.shop_id && shop.passwd == shop_login.shop_passwd) {
          this.shop_id = shop.id;
          console.log("Login correcto" + this.shop_id);
          this.router.navigate(['/manager']);
        }
      });
    });
  }
}
