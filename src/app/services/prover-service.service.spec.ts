import { TestBed, inject } from '@angular/core/testing';

import { ProverServiceService } from './prover-service.service';

describe('ProverServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProverServiceService]
    });
  });

  it('should be created', inject([ProverServiceService], (service: ProverServiceService) => {
    expect(service).toBeTruthy();
  }));
});
