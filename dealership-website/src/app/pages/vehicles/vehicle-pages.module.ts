import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehiclePagesComponent} from './vehicle-pages.component';
import {VehicleDetailsPageComponent} from './vechicle-details-page';
import {VehicleListPageComponent} from './vechicle-list-page';
import {VehicleRouting} from './vehicle-pages.routing';
import {VehicleModule} from '../../_lib/components/vehicle/vehicle.module';


@NgModule({
  declarations: [
    VehiclePagesComponent,
    VehicleDetailsPageComponent,
    VehicleListPageComponent

  ],
  imports: [
    CommonModule,
    VehicleRouting,
    VehicleModule
  ]
})
export class VehiclePagesModule {
}


