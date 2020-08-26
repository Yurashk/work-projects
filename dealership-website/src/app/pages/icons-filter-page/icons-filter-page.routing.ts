import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IconsFilterPageComponent} from './icons-filter-page.component';

export const routes: Routes  = [
  {
    path: '',
    component: IconsFilterPageComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsFilterRouting {
}



