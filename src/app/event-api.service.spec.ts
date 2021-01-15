import { TestBed } from '@angular/core/testing';

import { EventAPIService } from './event-api.service';

describe('EventAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventAPIService = TestBed.get(EventAPIService);
    expect(service).toBeTruthy();
  });
});
