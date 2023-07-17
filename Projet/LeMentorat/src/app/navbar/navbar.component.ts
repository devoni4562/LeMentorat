import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../services/authenticator/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit
{

  mDropdown: boolean = false;
  fcDropdown: boolean = false;
  authService: AuthService;

  constructor(authService: AuthService, private router: Router)
  {
    this.authService = authService;
  }

  ngOnInit()
  {
    this.router.events.subscribe((events) =>
    {
      if (events instanceof NavigationEnd)
      {
        this.authService.resetInactivityTimeout();
        console.log('reset Timeout');
      }
    });
  }

}
