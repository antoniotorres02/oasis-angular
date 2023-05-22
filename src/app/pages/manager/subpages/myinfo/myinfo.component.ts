import { Component } from '@angular/core';
import {Question} from "../../../../../interfaces/question";
import {AnalyticsCollector} from "@angular/cli/src/analytics/analytics-collector";
import {ActivatedRoute} from "@angular/router";
import {ShopService} from "../../../../services/shop.service";
import {initializeShop, Shop} from "../../../../../interfaces/shop";
import {initializeInfo} from "../../../../../interfaces/info";

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent {

  shop: Shop = initializeShop();
  question: string = '';
  answer: string = '';
  faqs: Question[] = [];

  constructor(private route: ActivatedRoute, private shopService: ShopService) { }

  ngOnInit() {
    let shopId = this.route.snapshot.queryParams['shop_id'];

    this.shopService.getShop(shopId).subscribe(shop => {
      this.shop = shop;
      console.log("El id de la tienda es: ",shopId)
    });
    console.log("La tienda es: ",this.shop)
    this.shopService.getFaqs(shopId).subscribe(faqs => {
      this.faqs = faqs;
      console.log("Las faqs son: ",this.faqs)
    });
  }

  addFaq() {
    this.shopService.addFaqToShop(this.shop.id, this.question, this.answer)
    console.log("Los parametros son: ",this.question, this.answer)
    console.log("La tienda es: ",this.shop)
  }

  deleteQuestion(question: Question) {
    this.shopService.deleteFaq(this.shop.id, question.id);
  }

  applyInfo() {
    this.shopService.applyInfo(this.shop.id, this.shop.info);
  }

  clearInfo() {
    this.shop.info = initializeInfo();
  }

  applyDescription() {
    this.shopService.applyDescription(this.shop.id, this.shop.description);

  }

}
