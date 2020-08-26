import {Component} from '@angular/core';
import {MenuItem} from './_lib/theme/nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /// fields
  menuItems: Array<MenuItem> = [
    {
      title: 'home',
      url: ''
    },
    {
      title: 'icons',
      url: './icons'
    },
    {
      title: 'music',
      url: './music'
    },
    {
      title: 'vehicles',
      url: '/vehicles'
    },
    {
      title: 'phone',
      url: '/phone'
    }
  ];
  title = 'dealership-website';
}
