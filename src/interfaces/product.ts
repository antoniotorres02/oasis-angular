import * as url from "url";

interface ProductType {
  type: string;
  options: string[];
}

interface Product {
  productId: string;
  productName: string;
  productPrize: number;
  productImage: string; //URL
  productType: ProductType[];
  shopId: string;
}
