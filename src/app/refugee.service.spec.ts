import { TestBed, inject } from '@angular/core/testing';

import { RefugeeService } from './refugee.service';

describe('RefugeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefugeeService]
    });
  });

  it('should ...', inject([RefugeeService], (service: RefugeeService) => {
    expect(service).toBeTruthy();
  }));
});
