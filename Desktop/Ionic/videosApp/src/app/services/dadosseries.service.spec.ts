import { TestBed } from '@angular/core/testing';

import { DadosseriesService } from './dadosseries.service';

describe('DadosseriesService', () => {
  let service: DadosseriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosseriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
