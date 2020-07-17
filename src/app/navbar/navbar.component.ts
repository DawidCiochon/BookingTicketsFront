import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User;

  constructor(private router: Router, public service: UserService) {
    this.service.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }

  onLogout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }
}
