import {Component, OnInit} from '@angular/core';
import {ScreenWidthService} from "../services/screen-width/screen-width.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit
{

    burgerToggle = false;
    isLargedScreen = false;

    constructor(private screenWidthService: ScreenWidthService)
    {
    }


    ngOnInit()
    {
        this.screenWidthService.isLargeScreen$.subscribe((isLargeScreen) =>
        {
            this.isLargedScreen = isLargeScreen;

            if (this.isLargedScreen && this.burgerToggle)
            {
                this.toggleNavbar();
            }
        });
    }

    toggleNavbar()
    {

        this.burgerToggle = !this.burgerToggle;
        console.log(this.burgerToggle);
    }

      if (events instanceof NavigationEnd && this.authService.isLoggedIn)
      {
        this.authService.resetInactivityTimeout();
        console.log('reset Timeout');
      }
    });
  }
}
