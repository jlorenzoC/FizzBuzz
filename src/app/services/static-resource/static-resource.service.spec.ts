import { TestBed } from '@angular/core/testing';

import { StaticResourceService } from './static-resource.service';

describe('StaticResourceService', () => {
  let service: StaticResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
