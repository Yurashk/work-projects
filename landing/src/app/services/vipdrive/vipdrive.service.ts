export class VipDriveService {
  /// fields
  public hash = '';

  /// constructor
  constructor() {
    this.hash = this.getHash();
  }

  /// helpers
  public appendVipDriveScriptToHeader(scriptUrl: string, callback: () => void) {
    const element = window.document.querySelector('.vipdrv-integration');
    if (!element) {
      const script = window.document.createElement('script');
      script.classList.add('vipdrv-integration');
      script.setAttribute('src', `${scriptUrl}?hash=${this.getHash()}`);
      script.setAttribute('async', '');
      window.document.head.appendChild(script);
      (window as any).VipDriveCallback = () => {
        callback();
      };
    } else {
      callback();
    }
  }

  public init(siteAggregationId: string) {
    (window as any).VipDrive.init({siteAggregationId, disableAnalytics: true});
  }

  public widgetIframeUrl(widgetUrl: string, siteAggregationId, themeColor: string, wizardIds: Array<number>, skipAnalytics = true): string {
    const wizardIdStr = wizardIds.join(',');
    let url = `${widgetUrl}/?aid=${siteAggregationId}&hash=${this.hash}&openWidgetAsIframe=true#?themeColor=#${themeColor}&wid=${wizardIdStr}`;
    if (skipAnalytics) {
      url += `&sa=true`;
    }
    return url;
  }

  public widgetSeparatePageUrl(widgetUrl: string, siteAggregationId: string, themeColor: string, wizardIds: Array<number>, skipAnalytics = true): string {
    const wizardIdStr = wizardIds.join(',');
    let url = `${widgetUrl}/?aid=${siteAggregationId}&openWidgetAsSeparatePage=true#?wid=${wizardIdStr}&themeColor=${themeColor}&hash=${this.hash}`;
    if (skipAnalytics) {
      url += `&sa=true`;
    }
    return url;
  }

  private getHash(): string {
    return Math.random().toString(36).substring(7);
  }
}
