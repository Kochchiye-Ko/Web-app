import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsheduleComponent } from './trainshedule.component';

describe('TrainsheduleComponent', () => {
  let component: TrainsheduleComponent;
  let fixture: ComponentFixture<TrainsheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
