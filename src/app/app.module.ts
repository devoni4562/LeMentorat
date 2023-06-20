import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NgOptimizedImage} from "@angular/common";
import { PresentationComponent } from './index/presentation/presentation.component';
import { LastNewsComponent } from './index/last-news/last-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    LastNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
