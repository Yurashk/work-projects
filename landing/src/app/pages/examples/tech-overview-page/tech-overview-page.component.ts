import {Component, OnInit} from '@angular/core';
import {VipDriveService} from '../../../services';
import {environment} from '../../../../environments/environment';
import {WidgetThemeColor} from '../../../constants';
import {StringExtensions} from '../../../extensions';

@Component({
  selector: 'app-tech-overview-page',
  templateUrl: './tech-overview-page.component.html',
  styleUrls: ['./tech-overview-page.component.scss']
})
export class TechOverviewPageComponent implements OnInit {

  /// fields
  public secondaryWidgetIframeUrl = '';

  /// injected dependencies
  public vipdriveService: VipDriveService = new VipDriveService();

  /// constructor
  constructor() {
  }

  /// lifecycle
  ngOnInit(): void {
    this.secondaryWidgetIframeUrl = this.vipdriveService.widgetIframeUrl(
      environment.widgetUrl,
      environment.demoSiteAggregationId,
      WidgetThemeColor.blue,
      [environment.demoSecondaryWizardId]);
  }
}
