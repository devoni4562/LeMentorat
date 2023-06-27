import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutUsComponent} from "./page/about-us/about-us.component";
import {IndexComponent} from "./page/index/index.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule
{
}
