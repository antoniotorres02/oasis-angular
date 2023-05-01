import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopapiComponent } from './shopapi.component';

describe('ShopapiComponent', () => {
  let component: ShopapiComponent;
  let fixture: ComponentFixture<ShopapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
