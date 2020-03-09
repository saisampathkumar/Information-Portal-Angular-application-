import { Injectable } from '@angular/core';
import { AccountsService } from './accounts.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlreadyAuthService implements CanActivate {

  constructor(
    private accountsService: AccountsService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.accountsService.isAuthenticated()) {
      this.router.navigate(['/account']);
      return false;
    }
    return true;
  }
}
