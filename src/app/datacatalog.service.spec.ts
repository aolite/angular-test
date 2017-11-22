import { TestBed, inject } from '@angular/core/testing';

import { DatacatalogService } from './datacatalog.service';

describe('DatacatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatacatalogService]
    });
  });

  it('should be created', inject([DatacatalogService], (service: DatacatalogService) => {
    expect(service).toBeTruthy();
  }));
});
