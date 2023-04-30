import { Component } from '@angular/core';
import {ShopLogin, ShopLoginServiceService} from "../../services/shop-login-service.service";

@Component({
  selector: 'app-shoplogin',
  templateUrl: './shoplogin.component.html',
  styleUrls: ['./shoplogin.component.css'],
  providers: [ShopLoginServiceService]
})
export class ShoploginComponent {
  shop_user: string = 'foo';
  shop_passwd: string = 'foo123';
  constructor(private service: ShopLoginServiceService) {

  }

  sendLogin() {
    let shopLogin: ShopLogin  = {
      shop_id: this.shop_user,
      shop_passwd: this.shop_passwd
    }

    this.service.login(shopLogin);
  }
}
