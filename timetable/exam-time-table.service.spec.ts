import { TestBed } from '@angular/core/testing';

import { ExamTimeTableService } from './exam-time-table.service';

describe('ExamTimeTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamTimeTableService = TestBed.get(ExamTimeTableService);
    expect(service).toBeTruthy();
  });
});
