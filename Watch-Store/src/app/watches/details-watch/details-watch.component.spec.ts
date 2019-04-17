import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWatchComponent } from './details-watch.component';

describe('DetailsWatchComponent', () => {
  let component: DetailsWatchComponent;
  let fixture: ComponentFixture<DetailsWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
