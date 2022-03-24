import { TestBed } from '@angular/core/testing';

import { GiphyHttpService } from './giphy.http.service';

describe('Giphy.HttpService', () => {
  let service: GiphyHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
