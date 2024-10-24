import { TestBed } from '@angular/core/testing';

import { ChoosePasswordService } from './choose-password.service';

describe('ChoosePasswordService', () => {
  let service: ChoosePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoosePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
