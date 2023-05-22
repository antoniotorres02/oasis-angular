import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentAddressComponent } from './shipment-address.component';

describe('ShipmentAddressComponent', () => {
  let component: ShipmentAddressComponent;
  let fixture: ComponentFixture<ShipmentAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
