import {Info} from "./info";
import {Question} from "./question";


export interface Shop {
  id: string;
  name: string;
  email: string;
  login_id: string;
  passwd: string;
  image: string;
  products: string[];
  info: Info;
}

export function initializeShop() {
  return {
    id: '',
    name: '',
    email: '',
    login_id: '',
    passwd: '',
    image: '',
    products: [],
    info: {
      phone: '',
      secondary_phone: '',
      entity: '',
      country: '',
      state: '',
      postal_code: '',
      street: '',
      street_number: '',
      additional_info: ''
    }
  } as Shop;
}
