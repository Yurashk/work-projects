import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {HomePageRouting} from './home-page.routing';
import {HomeComponent} from '../../_lib/components/home/home.component';
import {HomeModule} from '../../_lib/components/home/home.module';
import {ThemeModule} from '../../_lib/theme/theme.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRouting,
    ThemeModule,
    HomeModule
  ]

})
export class HomePageModule {
}





