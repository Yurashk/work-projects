
export class WebExtensions{

static buildQueryString(parameters: any): string {
    let qs = '';
    for (const key in parameters) {
      if (parameters[key] == null) {
        continue;
      }
      const value = parameters[key];

      if (value) {
        qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
      }
    }
    if (qs.length > 0) {
      qs = qs.substring(0, qs.length - 1); // chop off last "&"
      qs = '?' + qs;
    }
    return qs;
  }
}