import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalModalComponent } from './principal-modal.component';

describe('PrincipalModalComponent', () => {
  let component: PrincipalModalComponent;
  let fixture: ComponentFixture<PrincipalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
