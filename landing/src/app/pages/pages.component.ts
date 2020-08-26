import {Component, OnInit} from '@angular/core';
import {VipDriveService} from '../services/vipdrive';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-pages',
  styleUrls: ['./pages.component.scss'],
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {
  public vipdriveService: VipDriveService = new VipDriveService();
  ngOnInit(): void {
    this.vipdriveService.appendVipDriveScriptToHeader(environment.codeUrl, () => {
      this.vipdriveService.init(environment.demoSiteAggregationId);
    });
  }
}
