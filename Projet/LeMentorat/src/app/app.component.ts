import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit
{

  @HostListener('window:beforeunload', ['$event'])

  title = 'LeMentorat';
  exitModal = false;

  constructor(private router: Router)
  {
  }

  showExitModal($event: any)
  {
    this.exitModal = true;
  }

  ngOnInit()
  {
    this.router.events.subscribe((event) =>
    {
      if (event instanceof NavigationEnd)
      {
        window.scrollTo(0, 0);
      }
    });
  }
}
