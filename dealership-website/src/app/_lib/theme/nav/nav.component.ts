import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  /// binding
  @Input() menuItems: Array<MenuItem> = [];
  show(c){
      console.log(c);
  }
  constructor() {
  }
}

export class MenuItem {
  title: string;
  url: string;
}
