import { TestBed } from '@angular/core/testing';

import { Angular15Service } from './angular15.service';

describe('Angular15Service', () => {
  let service: Angular15Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Angular15Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
