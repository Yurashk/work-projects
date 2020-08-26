import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconsFilterPageComponent} from './icons-filter-page.component';
import {IconsFilterRouting} from './icons-filter-page.routing';
import {IconsFilterModule} from '../../_lib/components/icon-picker';

@NgModule({
  declarations: [IconsFilterPageComponent],
  imports: [
    CommonModule,
    IconsFilterModule,
    IconsFilterRouting
  ]

})
export class IconsFilterPageModule {
}



