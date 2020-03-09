import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AccountsService } from './accounts.service';
import { User } from '../models/user.model';
import { RouterTestingModule } from '@angular/router/testing';


describe('AccountsService', () => {
  let service: AccountsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AccountsService]
    });
    service = TestBed.inject(AccountsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should AccountsService be created', () => {
    expect(service).toBeTruthy();
  });

  it('Login User credentials', () => {
    service.allUsers = [
      {
        userName: 'trungvo',
        email: 'vtt311096@gmail.com',
        passWord: 'cGFzcw=='
      },
      {
        userName: 'anish',
        email: 'anish@gmail.com',
        passWord: 'cGFzcw=='
      },
      {
        userName: 'yuxuan',
        email: 'yuxuan@gmail.com',
        passWord: 'cGFzcw=='
      }
    ]

    let user: User = {
      userName: 'trungvo',
      email: 'vtt311096@gmail.com',
      passWord: 'pass'
    }
    // expect(service.allUsers.length).toBe(3);
    expect(service.validateLogIn(user).isValidated).toBe(true);
  });

  // it('should get a populated array', () => {
  //   service.loadAllUsers().subscribe((data: any) => {
  //     expect(data.length > 0).toBeTruthy();
  //   });

  //   const req = httpMock.expectOne(`api/accounts`, 'call to api');
  //   expect(req.request.method).toBe('GET');

  //   req.flush(["1", "2"]);

  //   httpMock.verify();

  // });

});




