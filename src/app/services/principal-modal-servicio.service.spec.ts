import { TestBed } from '@angular/core/testing';

import { PrincipalModalServicioService } from './principal-modal-servicio.service';

describe('PrincipalModalServicioService', () => {
  let service: PrincipalModalServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipalModalServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
