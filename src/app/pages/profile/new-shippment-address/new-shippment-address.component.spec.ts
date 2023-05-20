import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShippmentAddressComponent } from './new-shippment-address.component';

describe('NewShippmentAddressComponent', () => {
  let component: NewShippmentAddressComponent;
  let fixture: ComponentFixture<NewShippmentAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShippmentAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewShippmentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
