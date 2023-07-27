import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../services/authenticator/auth.service";
import {NavigationEnd, Router} from "@angular/router";
import {ScreenWidthService} from "../../../services/screen-width/screen-width.service";

@Component({
    selector: 'app-navbar-content',
    templateUrl: './navbar-content.component.html',
    styleUrls: ['./navbar-content.component.css']
})
export class NavbarContentComponent implements OnInit
{
    mDropdown: boolean = false;
    fcDropdown: boolean = false;
    isLargeScreen: boolean = false;

    @Input() givenClass: string = '';

    authService: AuthService;

    constructor(authService: AuthService, private router: Router, private screenWidthService: ScreenWidthService)
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

        this.screenWidthService.isLargeScreen$.subscribe((isLargeScreen) =>
        {
            this.isLargeScreen = isLargeScreen;
        });

    }

}
