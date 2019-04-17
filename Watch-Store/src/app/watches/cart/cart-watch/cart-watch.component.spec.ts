import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartWatchComponent } from './cart-watch.component';

describe('CartWatchComponent', () => {
  let component: CartWatchComponent;
  let fixture: ComponentFixture<CartWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
