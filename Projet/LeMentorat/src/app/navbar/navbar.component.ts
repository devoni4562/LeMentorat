import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent
{

  burgerToggle = false;
  isLargedScreen = window.innerWidth >= 1024;

  @HostListener('window:resize', ['$event'])
  onResize(event: any)
  {
    this.isLargedScreen = event.target.innerWidth >= 1024;
  }

  toggleNavbar()
  {
    this.burgerToggle = !this.burgerToggle;
    console.log(this.burgerToggle);
  }

}
