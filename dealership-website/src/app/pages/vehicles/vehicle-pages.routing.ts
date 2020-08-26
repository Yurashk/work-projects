import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {VehiclePagesComponent} from './vehicle-pages.component';
import {VehicleListPageComponent} from './vechicle-list-page';
import {VehicleDetailsPageComponent} from './vechicle-details-page';

export const routes: Routes = [
  {
    path: '',
    component: VehiclePagesComponent,
    children: [
      {
        path: '',
        component: VehicleListPageComponent
      },
      {
        path: ':vehicleId',
        component: VehicleDetailsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRouting {
}


