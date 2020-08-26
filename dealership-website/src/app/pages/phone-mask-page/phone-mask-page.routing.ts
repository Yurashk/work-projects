import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PhoneMaskPageComponent} from './phone-mask-page.component';

export const routes: Routes  = [
  {
    path: '',
    component: PhoneMaskPageComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneMaskPageRouting {
}
