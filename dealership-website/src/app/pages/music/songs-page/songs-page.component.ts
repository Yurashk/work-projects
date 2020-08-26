import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html'
})
export class SongsPageComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const vehicleId = Number(params.vehicleId);
      console.log(vehicleId);
    });
  }
}


