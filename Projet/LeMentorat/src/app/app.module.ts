import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NgOptimizedImage} from '@angular/common';
import {PresentationComponent} from './page/home/presentation/presentation.component';
import {LastNewsComponent} from './page/home/last-news/last-news.component';
import {MentorsComponent} from './page/home/mentors/mentors.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {WitnessesComponent} from './page/home/witnesses/witnesses.component';
import {RedirectContactComponent} from './page/home/redirect-contact/redirect-contact.component';
import {FooterComponent} from './footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MethodDropdownComponent} from './navbar/dropdown/method-dropdown/method-dropdown.component';
import {FreeContentDropdownComponent} from './navbar/dropdown/free-content-dropdown/free-content-dropdown.component';
import {AboutUsComponent} from './page/about-us/about-us.component';
import {HomeComponent} from './page/home/home.component';
import {MentoratMethodComponent} from './page/our-method/mentorat-method/mentorat-method.component';
import {WhoThatForComponent} from './page/our-method/who-that-for/who-that-for.component';
import {CaseStudyComponent} from './page/free-content/case-study/case-study.component';
import {LiveConferenceComponent} from './page/free-content/live-conference/live-conference.component';
import {BusinessOwnerCoffeeComponent} from './page/free-content/business-owner-coffee/business-owner-coffee.component';
import {BlogComponent} from './page/blog/blog.component';
import {WhiteSectionComponent} from './white-section/white-section.component';
import {StoryComponent} from './page/about-us/story/story.component';
import {OurVisionComponent} from './page/about-us/our-vision/our-vision.component';
import {StaffComponent} from './page/about-us/staff/staff.component';
import {LoginComponent} from './page/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptor} from "./Interceptor/AuthInterceptor";
import { AdminComponent } from './page/admin/admin.component';
import { CreateArticleComponent } from './page/admin/create-article/create-article.component';

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
    HomeComponent,
    MentoratMethodComponent,
    WhoThatForComponent,
    CaseStudyComponent,
    LiveConferenceComponent,
    BusinessOwnerCoffeeComponent,
    BlogComponent,
    WhiteSectionComponent,
    StoryComponent,
    OurVisionComponent,
    StaffComponent,
    LoginComponent,
    AdminComponent,
    CreateArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    SlickCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule
{
}
