import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconsFilterComponent} from './icons-filter.component';
import {ThemeModule} from '../../theme/theme.module';

@NgModule({
  declarations: [IconsFilterComponent],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    IconsFilterComponent
  ]

})
export class IconsFilterModule {
}



