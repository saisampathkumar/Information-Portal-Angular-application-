import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/accounts/models/user.model';
import { Auth } from 'src/app/accounts/models/auth.model';
import { AccountsService } from 'src/app/accounts/services/accounts.service';
@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {
  currentUser: User;
  subjects = [
    { name: 'Angular', uri: 'Angular', imagePath: '/assets/img/angular.jpg' },
    { name: 'JavaScript', uri: 'JavaScript',  imagePath: '/assets/img/js.jpg' },
    { name: 'NodeJS',  uri: 'NodeJS', imagePath: '/assets/img/nodejs.jpg' },
    ];
  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accountsService.getBehaviorSubject().subscribe((auth: Auth) => {
      // print out user info
      console.log('HOME COMP: ' + JSON.stringify(auth.currentUser, null, 2));

      // set currentUser for your component (if needed)
      this.currentUser = auth.currentUser;
    });
  }

}
