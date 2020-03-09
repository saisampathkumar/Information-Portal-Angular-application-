import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts/services/accounts.service';
import { Auth } from '../accounts/models/auth.model';
import { User } from '../accounts/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accountsService.getBehaviorSubject().subscribe((auth: Auth) => {
      // console.log('HOME COMP: ' + JSON.stringify(auth.currentUser, null, 2));
      this.currentUser = auth.currentUser;
    })
  }

}
