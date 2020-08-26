import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vehicle-details-page',
  templateUrl: './vehicle-details-page.component.html'
})
export class VehicleDetailsPageComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const vehicleId = Number(params.vehicleId);
      console.log(vehicleId)
    });
  }
}


