import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTarjetasComponent } from './add-tarjetas.component';

describe('AddTarjetasComponent', () => {
  let component: AddTarjetasComponent;
  let fixture: ComponentFixture<AddTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTarjetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
