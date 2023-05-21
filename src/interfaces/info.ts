


export interface Info {
  phone: string;
  secondary_phone: string;
  entity: string;
  country: string;
  state: string;
  postal_code: string;
  street: string;
  street_number: string;
  additional_info: string;
}

export function initializeInfo() {
  return {
    phone: '',
    secondary_phone: '',
    entity: '',
    country: '',
    state: '',
    postal_code: '',
    street: '',
    street_number: '',
    additional_info: ''
  } as Info;
}
