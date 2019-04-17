import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCommonComponent } from './order-common.component';

describe('OrderCommonComponent', () => {
  let component: OrderCommonComponent;
  let fixture: ComponentFixture<OrderCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
