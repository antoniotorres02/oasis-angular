import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaVinculadaComponent } from './tarjeta-vinculada.component';

describe('TarjetaVinculadaComponent', () => {
  let component: TarjetaVinculadaComponent;
  let fixture: ComponentFixture<TarjetaVinculadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaVinculadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaVinculadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
