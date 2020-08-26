import {Component, OnInit} from '@angular/core';
import {GtagExtensions, HotJarExtensions} from './extensions';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    if (environment.hotJarId) {
      HotJarExtensions.init(environment.hotJarId);
    }

    if (environment.gtagId) {
      GtagExtensions.init(environment.gtagId);
    }
  }
}
