import { Component } from '@angular/core';
import {JsService} from "../../service/js.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(private js: JsService) {
    this.js.loadScript('/daniel','checkout.js');
  }

}

