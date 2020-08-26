import {Component, OnInit} from '@angular/core';
import {VipDriveService} from '../../../services/vipdrive';
import {environment} from '../../../../environments/environment';
import {WidgetThemeColor} from '../../../constants';
import {StringExtensions} from '../../../extensions';

@Component({
  selector: 'app-test-drive-page',
  templateUrl: './test-drive-page.component.html',
  styleUrls: ['./test-drive-page.component.scss']
})
export class TestDrivePageComponent implements OnInit {

  /// fields
  public primaryWidgetIframeUrl = '';

  /// injected dependencies
  public vipdriveService: VipDriveService = new VipDriveService();

  constructor() {
  }

  ngOnInit(): void {
    this.primaryWidgetIframeUrl = this.vipdriveService.widgetIframeUrl(
      environment.widgetUrl,
      environment.demoSiteAggregationId,
      WidgetThemeColor.blue,
      [environment.demoPrimaryWizardId]);
  }
}
