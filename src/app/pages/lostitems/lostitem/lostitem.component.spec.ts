import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostitemComponent } from './lostitem.component';

describe('LostitemComponent', () => {
  let component: LostitemComponent;
  let fixture: ComponentFixture<LostitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
