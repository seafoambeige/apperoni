import { TestBed, inject } from '@angular/core/testing';

import { SchoolMapService } from './school-map.service';

describe('SchoolMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolMapService]
    });
  });

  it('should be created', inject([SchoolMapService], (service: SchoolMapService) => {
    expect(service).toBeTruthy();
  }));
});
