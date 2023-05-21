import { Component } from '@angular/core';
import {Product} from "../../../../../interfaces/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent {

  products: Product[] = [];


  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productService.getProductsByShopId(this.route.snapshot.queryParams['shop_id']).subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(product: Product) {
    //TODO: delete product from firebase
  }
}
