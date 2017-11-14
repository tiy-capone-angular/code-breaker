import { TestBed, inject } from '@angular/core/testing';

import { PegClickService } from './peg-click.service';

describe('PegClickService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PegClickService]
    });
  });

  it('should be created', inject([PegClickService], (service: PegClickService) => {
    expect(service).toBeTruthy();
  }));
});
