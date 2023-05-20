import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesTarjetaComponent } from './opciones-tarjeta.component';

describe('OpcionesTarjetaComponent', () => {
  let component: OpcionesTarjetaComponent;
  let fixture: ComponentFixture<OpcionesTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionesTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
