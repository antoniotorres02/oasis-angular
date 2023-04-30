import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SQueriesComponent } from './s-queries.component';

describe('SQueriesComponent', () => {
  let component: SQueriesComponent;
  let fixture: ComponentFixture<SQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SQueriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
