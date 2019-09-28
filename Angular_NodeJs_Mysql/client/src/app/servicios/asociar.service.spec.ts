import { TestBed } from '@angular/core/testing';

import { AsociarService } from './asociar.service';

describe('AsociarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsociarService = TestBed.get(AsociarService);
    expect(service).toBeTruthy();
  });
});
