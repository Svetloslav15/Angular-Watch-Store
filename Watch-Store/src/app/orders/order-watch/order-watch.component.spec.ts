import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWatchComponent } from './order-watch.component';

describe('OrderWatchComponent', () => {
  let component: OrderWatchComponent;
  let fixture: ComponentFixture<OrderWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
