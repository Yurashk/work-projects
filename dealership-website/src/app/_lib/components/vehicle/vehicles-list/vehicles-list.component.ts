import {Component, OnInit} from '@angular/core';
import {ApiAutoService, ApiService} from '../../../services/api';
import {Router} from '@angular/router';


@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  articles;
  // tslint:disable-next-line:variable-name
  spiner_show = false;

  // selectedCard: articles;
  constructor(private apiService: ApiService, private apiDetail: ApiAutoService, private router: Router) {
  }

  ngOnInit() {
    this.apiService.getNews().subscribe((data: any) => {
      // console.log(data);
      console.log(data);
      this.articles = data['items'];
      // this.apiDetail.getId(data.id)
      this.spiner_show = false;
    });
  }

}
