import { TestBed } from '@angular/core/testing';

import { AlreadyAuthService } from './already-auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountsService } from './accounts.service';

describe('AlreadyAuthService', () => {
  let service: AlreadyAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AccountsService]
    });
    service = TestBed.inject(AlreadyAuthService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
