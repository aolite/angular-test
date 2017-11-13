import { TestBed, inject } from '@angular/core/testing';

import { RouterNamesService } from './router-names.service';

describe('RouterNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterNamesService]
    });
  });

  it('should be created', inject([RouterNamesService], (service: RouterNamesService) => {
    expect(service).toBeTruthy();
  }));
});
