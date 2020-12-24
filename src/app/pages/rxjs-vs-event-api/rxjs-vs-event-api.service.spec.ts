import { TestBed } from '@angular/core/testing';

import { RxjsVsEventApiService } from './rxjs-vs-event-api.service';

describe('RxjsVsEventApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsVsEventApiService = TestBed.get(RxjsVsEventApiService);
    expect(service).toBeTruthy();
  });
});
