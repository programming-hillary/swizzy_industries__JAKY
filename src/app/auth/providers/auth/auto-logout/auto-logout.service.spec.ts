import { TestBed } from '@angular/core/testing'
import { AutoLogout } from './auto-logout.service';

describe('AutoLogout', () => {
  let service: AutoLogout;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoLogout);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
