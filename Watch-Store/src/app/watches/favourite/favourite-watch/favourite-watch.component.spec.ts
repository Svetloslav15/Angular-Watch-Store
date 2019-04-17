import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteWatchComponent } from './favourite-watch.component';

describe('FavouriteWatchComponent', () => {
  let component: FavouriteWatchComponent;
  let fixture: ComponentFixture<FavouriteWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
