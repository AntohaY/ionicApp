import { TestBed } from '@angular/core/testing';

import { PythonClassifierService } from './python-classifier.service';

describe('PythonClassifierService', () => {
  let service: PythonClassifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PythonClassifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
