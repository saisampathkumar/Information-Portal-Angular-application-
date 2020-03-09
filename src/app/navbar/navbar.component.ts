import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountsService } from '../accounts/services/accounts.service';
import { Auth } from '../accounts/models/auth.model';
import { User } from '../accounts/models/user.model';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean;
  currentUserName: string;
  currentUser: User;
  sticky

  constructor(private accountsService: AccountsService) {
  }
  @ViewChild("toolbar") toolbar: MatToolbar;

  ngOnInit(): void {
    window.onscroll = () => this.addStickyHeader();
    this.accountsService.getBehaviorSubject().subscribe((auth: Auth) => {
      console.log('INSIDE NAVBAR:...' + JSON.stringify(auth, null, 2));
      this.isAuthenticated = auth.isAuthenticated;
      this.currentUserName = auth.currentUser ? auth.currentUser.userName.toUpperCase() : '';
      this.currentUser = auth.currentUser;
    });
  }

  onLogOut() {
    this.accountsService.logOut();
  }

  addStickyHeader() {
    let header = this.toolbar._elementRef.nativeElement;
    let sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

}
