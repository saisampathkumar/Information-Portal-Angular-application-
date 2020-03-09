import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from '../models/auth.model';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class AccountsService implements OnInit {
  // mock user
  authUser: Auth = {
    currentUser: undefined,
    isAuthenticated: false,
    error_msg: undefined,
    success_msg: undefined
  }
  allUsers: User[] = [];
  public accountsServiceSubj: BehaviorSubject<Auth>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.accountsServiceSubj = this.getBehaviorSubject();
    this.loadAllUsers().subscribe(users => {
      this.allUsers = users;
      // console.log(this.allUsers)
    })
    this.isAuthenticated();
  }

  ngOnInit() {
    // check localStorage first for logged in user
    this.isAuthenticated();
  }

  getBehaviorSubject(): BehaviorSubject<Auth> {
    if (!this.accountsServiceSubj) {
      this.accountsServiceSubj = new BehaviorSubject<Auth>(this.authUser);
    }
    return this.accountsServiceSubj;
  }

  isAuthenticated(): boolean {
    let authenticated = localStorage.getItem('userData') !== undefined && localStorage.getItem('userData') !== null;
    if (authenticated) {
      this.setCurrentUser();
    } else {
      this.clearCurrentUser();
    }
    return authenticated;
  }

  loadAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`api/accounts`);
  }

  getUser(email:string): Observable<User>{
    return this.http.get<User>(`api/accounts?email=${email}`);
  }

  logIn(user: User) {
    // check validation
    console.log(this.allUsers);
    let { isValidated, foundUser } = this.validateLogIn(user);

    if (isValidated) {
      let auth: Auth = {
        currentUser: user,
        isAuthenticated: true,
        error_msg: undefined,
        success_msg: 'You have logged in successfully'
      }
      this.authUser = { ...auth };
      this.accountsServiceSubj.next(this.authUser);

      // save userEmail to localStorage
      localStorage.setItem('userData', JSON.stringify({
        userName: user.userName,
        email: user.email,
        firstName: foundUser.firstName.toLocaleUpperCase(),
        lastName: foundUser.lastName.toLocaleUpperCase(),
        userType: foundUser.userType
      }));

      // logged in success => route to Home page
      setTimeout(() => {
        this.router.navigate(['/account']);
      }, 1000);
    } else {
      let auth: Auth = {
        currentUser: undefined,
        isAuthenticated: false,
        error_msg: "Invalid username/email/password. Check again!",
        success_msg: undefined
      }
      this.authUser = { ...auth };
      this.accountsServiceSubj.next(this.authUser);
    }
  }

  validateLogIn(user: User): { isValidated: boolean, foundUser: User } {
    let foundUser: User = this.allUsers.find((us: User) => us.email === user.email);
    // console.log('FOUND USER: ' + foundUser);

    if (foundUser !== undefined && foundUser !== null) {
      if (foundUser.userName === user.userName) {
        // correct username
        console.log('correct username');
        if (window.btoa(user.passWord) === foundUser.passWord) {
          // correct password ==> good
          console.log('Correct password');
          return { isValidated: true, foundUser: foundUser };
        } else {
          // wrong password
          console.log('Wrong password');
        }
      } else {
        // wrong username
        console.log('wrong username');
      }
    }
    return { isValidated: false, foundUser: undefined };
  }

  register(user: User) {
    // console.log(user);
    // check exist user
    let userExist: boolean = this.isUserExist(user);
    if (userExist) {
      let auth: Auth = {
        currentUser: undefined,
        isAuthenticated: false,
        error_msg: "This user account already exists",
        success_msg: undefined
      }
      this.authUser = { ...auth };
      this.accountsServiceSubj.next(this.authUser);
    } else {
      // hash password
      user.passWord = window.btoa(user.passWord);
      this.http.post<User>(`api/accounts`, user).pipe(
        tap(() => {
          this.loadAllUsers().subscribe(users => {
            this.allUsers = users;
            // console.log(this.allUsers);
            let auth: Auth = {
              currentUser: undefined,
              isAuthenticated: false,
              error_msg: undefined,
              success_msg: "Account created successfully."
            }
            this.authUser = { ...auth };
            this.accountsServiceSubj.next(this.authUser);

            // on register success
            setTimeout(() => {
              this.router.navigate(['/logIn']);
            }, 1000);
          })
        })
      ).subscribe(
        (val) => { },
        (err) => console.log(err)
      );
    }
  }


  isUserExist(user: User): boolean {
    let foundUser: User = this.allUsers.find(u => u.email === user.email);
    return foundUser ? true : false;
  }


  logOut() {
    // clear Local storage
    localStorage.clear();
    this.clearCurrentUser();

    this.router.navigate(['/logIn']);
  }


  setCurrentUser() {
    let auth: Auth = {
      currentUser: {
        userName: JSON.parse(localStorage.getItem('userData'))['userName'],
        email: JSON.parse(localStorage.getItem('userData'))['email'],
        firstName: JSON.parse(localStorage.getItem('userData'))['firstName'],
        lastName: JSON.parse(localStorage.getItem('userData'))['lastName'],
        userType: JSON.parse(localStorage.getItem('userData'))['userType']
      },
      isAuthenticated: true
    }
    this.authUser = { ...auth };
    console.log('inside accounts service...' + this.authUser);
    this.accountsServiceSubj.next(this.authUser);
  }


  clearCurrentUser() {
    let auth: Auth = {
      currentUser: undefined,
      isAuthenticated: false
    }
    this.authUser = { ...auth };
    this.accountsServiceSubj.next(new Auth());
  }

}
