import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchesAllComponent } from './watches-all.component';

describe('WatchesAllComponent', () => {
  let component: WatchesAllComponent;
  let fixture: ComponentFixture<WatchesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
