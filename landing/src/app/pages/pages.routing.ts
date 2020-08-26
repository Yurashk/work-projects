import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {PagesComponent} from './pages.component';
import {ContactsComponent} from './contacts';
import {ExamplesComponent, TechOverviewPageComponent, TestDrivePageComponent} from './examples';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'integration',
        component: ExamplesComponent
      },
      {
        path: 'tech-overview',
        component: TechOverviewPageComponent
      },
      {
        path: 'test-drive',
        component: TestDrivePageComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRouting {
}
