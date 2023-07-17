import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from "./admin/admin.component";
import {CreateArticleComponent} from "./create-article/create-article.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminComponent,
    CreateArticleComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule
{
}
