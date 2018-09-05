import { TestBed, inject } from '@angular/core/testing';

import { NgxDataProviderService } from './ngx-data-provider.service';

describe('NgxDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxDataProviderService]
    });
  });

  it('should be created', inject([NgxDataProviderService], (service: NgxDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});
