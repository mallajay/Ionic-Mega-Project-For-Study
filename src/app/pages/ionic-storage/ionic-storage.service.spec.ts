import { TestBed } from '@angular/core/testing';

import { IonicStorageService } from './ionic-storage.service';

describe('IonicStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonicStorageService = TestBed.get(IonicStorageService);
    expect(service).toBeTruthy();
  });
});
