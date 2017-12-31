import { TestBed, inject } from '@angular/core/testing';

import { RoutesHelperService } from './routes-helper.service';

describe('RoutesHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesHelperService]
    });
  });

  it('should be created', inject([RoutesHelperService], (service: RoutesHelperService) => {
    expect(service).toBeTruthy();
  }));
});
