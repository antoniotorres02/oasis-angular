// @ts-ignore

import { Component } from '@angular/core';
import {opacity} from "../../animations/animation";
import {ShopLoginServiceService} from "../../services/shop-login-service.service";
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  animations: [ opacity ]
})
export class ManagerComponent {

  constructor(private shopService: ShopService, private shopLoginService: ShopLoginServiceService) { }

  ngOnInit() {
    console.log("shop_id: " + this.shopLoginService.shop_id);
    this.shopService.getShop(this.shopLoginService.shop_id).subscribe((shop) => {
      console.log(shop);
    });
  }

}


