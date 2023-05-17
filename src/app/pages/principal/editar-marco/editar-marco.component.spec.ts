import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMarcoComponent } from './editar-marco.component';

describe('EditarMarcoComponent', () => {
  let component: EditarMarcoComponent;
  let fixture: ComponentFixture<EditarMarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMarcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
