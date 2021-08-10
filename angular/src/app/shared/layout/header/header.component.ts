import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMenu: boolean;
  constructor(
    private as: AuthService
  ) {}

  currentUser: User;

  ngOnInit() {
    this.as.userChange$.subscribe(res => {
      if(res.loggedIn==true) {
        this.showMenu = true;
      }
    });
  }

  doLogout() {
    this.as.logout();
  }
}
