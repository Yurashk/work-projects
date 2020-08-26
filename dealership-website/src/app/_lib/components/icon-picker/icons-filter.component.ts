import {Component, Output, EventEmitter} from '@angular/core';
import {icons} from './constans/constans';

@Component({
  selector: 'app-icons-filter',
  templateUrl: './icons-filter.component.html',
  styleUrls: ['./icons-filter.component.scss']
})
export class IconsFilterComponent {
  @Output() selectIcon = new EventEmitter<string>();
  iconsFilter = icons;
  public lastChosenItem = null;

  constructor() {
  }

  filter(value) {
    this.iconsFilter = icons.filter((el) =>
      el.toLowerCase().indexOf(value.toString().toLowerCase()) > -1);
  }

}
