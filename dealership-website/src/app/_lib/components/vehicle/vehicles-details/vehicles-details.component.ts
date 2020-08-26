import {Component, OnInit} from '@angular/core';

import {Details} from './details.model';
import {ApiAutoService} from '../../../services/api';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})
export class VehiclesDetailsComponent implements OnInit {
  details: Details;
  articles;
  spiner_show: boolean = false;

  // selectedCard: articles;
  constructor(private apiService: ApiAutoService) {
    this.details = new Details();

  }

  ngOnInit() {
    // this.apiService.getNews().subscribe((data: Details) => {
    //   // console.log(data);
    //   this.details = data;
    //   // console.log(this.details.externalImages[0]);
    //   // console.log(this.details);
    //   this.spiner_show = false;
    // });
  }

}
