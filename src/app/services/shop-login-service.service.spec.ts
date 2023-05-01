import { TestBed } from '@angular/core/testing';

import { ShopLoginServiceService } from './shop-login-service.service';

describe('ShopLoginServiceService', () => {
  let service: ShopLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
