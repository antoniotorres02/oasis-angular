// @ts-ignore

import { Component } from '@angular/core';
import {opacity} from "../../animations/animation";
import {ShopLoginServiceService} from "../../services/shop-login-service.service";
import {ShopService} from "../../services/shop.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Shop} from "../../../interfaces/shop";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  animations: [ opacity ]
})
export class ManagerComponent {

  shop: Shop = {
    id: 'generic',
    name: 'generic',
    email: 'generic@oasis.com',
    login_id: 'generic',
    passwd: 'generic',
    image: 'generic',
    products: []
  }
  constructor(private shopService: ShopService, private shopLoginService: ShopLoginServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let shopId = this.route.snapshot.queryParams['shop_id'];
    this.shopService.getShop(shopId).subscribe(shop => {
      this.shop = shop;
    });
  }

  navigate(page: string) {
    this.router.navigate(['/manager', page], { queryParams: this.route.snapshot.queryParams});
  }
}


