import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeModule} from '../../_lib/theme/theme.module';
import {PhoneMaskPageComponent} from './phone-mask-page.component';
import {PhoneMaskModule} from '../../_lib/components/phone-mask';
import {PhoneMaskPageRouting} from './phone-mask-page.routing';

@NgModule({
  declarations: [PhoneMaskPageComponent],
  imports: [
    CommonModule,
    ThemeModule,
    PhoneMaskPageRouting,
    PhoneMaskModule
  ]

})
export class PhoneMaskPageModule {
}
