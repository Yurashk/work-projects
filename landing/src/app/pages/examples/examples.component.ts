import {Component, OnInit} from '@angular/core';
import {VipDriveService} from '../../services/vipdrive';
import {environment} from '../../../environments/environment';
import {WidgetThemeColor} from '../../constants';
import {StringExtensions} from '../../extensions';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  /// fields
  public separatePageUrl = '';
  public vipDriveService = new VipDriveService();

  constructor() {
  }

  ngOnInit(): void {
    this.vipDriveService.init(environment.demoSiteAggregationId);
    this.separatePageUrl = this.vipDriveService.widgetSeparatePageUrl(
      environment.widgetUrl,
      environment.demoSiteAggregationId,
      WidgetThemeColor.blue,
      [environment.demoPrimaryWizardId]
    );
  }
}
