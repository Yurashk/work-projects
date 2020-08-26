import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRouting} from './pages.routing';
import {
  PagesComponent,
  HomeComponent,
  ExamplesComponent,
  ContactsComponent,
  TechOverviewPageComponent,
  TestDrivePageComponent,
} from './index';
import {VipDriveModule} from '../services/vipdrive';

@NgModule({
  declarations: [
    PagesComponent,

    TechOverviewPageComponent,
    TestDrivePageComponent,
    HomeComponent,
    ContactsComponent,
    ExamplesComponent
  ],
  imports: [
    CommonModule,

    /// routing
    PagesRouting,

    // custom
    VipDriveModule,
  ],
  exports: [],
  providers: []
})
export class PagesModule {
}
