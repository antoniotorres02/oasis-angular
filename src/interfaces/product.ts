
interface ProductType {
  type: string;
  options: string[];
}
export interface Product {
  productId: string;
  productName: string;
  productPrize: number;
  productImage: string; //URL
  productType: ProductType[];
  shopId: string;
  productDescription: string;
}
