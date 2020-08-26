import {NgModule} from '@angular/core';
import {VehiclesDetailsComponent} from './vehicles-details';
import {VehiclesListComponent} from './vehicles-list';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    VehiclesDetailsComponent,
    VehiclesListComponent
  ],
  imports: [CommonModule,
  RouterModule
  ],
  providers: [],
  exports: [
    VehiclesListComponent,
    VehiclesDetailsComponent
  ]
})
export class VehicleModule {
}




