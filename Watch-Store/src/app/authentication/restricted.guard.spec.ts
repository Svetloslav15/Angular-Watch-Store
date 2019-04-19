import { TestBed, async, inject } from '@angular/core/testing';

import { RestrictedGuard } from './restricted.guard';

describe('RestrictedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestrictedGuard]
    });
  });

  it('should ...', inject([RestrictedGuard], (guard: RestrictedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
