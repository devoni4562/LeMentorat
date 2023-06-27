import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NgOptimizedImage} from '@angular/common';
import {PresentationComponent} from './index/presentation/presentation.component';
import {LastNewsComponent} from './index/last-news/last-news.component';
import {MentorsComponent} from './index/mentors/mentors.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {WitnessesComponent} from './index/witnesses/witnesses.component';
import {RedirectContactComponent} from './index/redirect-contact/redirect-contact.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {MethodDropdownComponent} from './navbar/dropdown/method-dropdown/method-dropdown.component';
import {FreeContentDropdownComponent} from './navbar/dropdown/free-content-dropdown/free-content-dropdown.component';
import {AboutUsComponent} from './about-us/about-us.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    LastNewsComponent,
    MentorsComponent,
    WitnessesComponent,
    RedirectContactComponent,
    FooterComponent,
    MethodDropdownComponent,
    FreeContentDropdownComponent,
    AboutUsComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    SlickCarouselModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule
{
}
