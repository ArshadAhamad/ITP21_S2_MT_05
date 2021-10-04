import { TestBed } from '@angular/core/testing';

import { ClassTimeTableService } from './class-time-table.service';

describe('ClassTimeTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassTimeTableService = TestBed.get(ClassTimeTableService);
    expect(service).toBeTruthy();
  });
});
