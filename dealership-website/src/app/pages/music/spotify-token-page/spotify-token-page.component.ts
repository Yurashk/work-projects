import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-spotify-token-page',
  templateUrl: './spotify-token-page.component.html'
})
export class SpotifyTokenPageComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const vehicleId = Number(params.vehicleId);
      console.log(vehicleId);
    });
  }
}
