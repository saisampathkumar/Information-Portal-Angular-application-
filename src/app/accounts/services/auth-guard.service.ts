import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountsService } from './accounts.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private accountsService: AccountsService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (!this.accountsService.isAuthenticated()) {
      this.router.navigate(['/logIn']);
      return false;
    }
    return true;
  }

}
