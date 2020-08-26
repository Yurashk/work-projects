import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment} from 'src/environments/environment';
// import 'rxjs/add/operator/map';
// import { WebExtensions } from '../app.extensions';
@Injectable({
  providedIn: 'root'
})
export class ApiSongsService {
  private searchUrl: string;
  private bearer = 'BQCHbdfBnYQTUPsthDVT6YNS6b3J4kvOLQm-cHZTpzeg3BYhgrd8md-SjCzS4bLlF80gYvr2o3wzgO3leHNUsJO7_HAK_YOnvm7coS_SEXRfd9inWwooq184xDTaoFacZE6DOH_k4QGP2HJyEItm-V0o82Pn8t1mVtjy_Ja2iM9VF_rgx9ptlVWihnQb5y9LlmlAcgqo7L62vFqcl8woIKX3TUavRoJxLqOtn8vMTUN8r9EG58yWXH9qadClzPapRyow-kxim1occAG03Q';
  clientId = 'a14f8b16346d4816842dcc69c95cc833';
  clientSecret = '739540861ff6473f8549e594f85b87d4';

  constructor(private httpClient: HttpClient) {
  }

  getAuth = () => {
    const params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'client_credentials');
    const body = params.toString();
    return this.httpClient.post('https://accounts.spotify.com/api/token', body, {
      headers: {
        Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  };

  searchTracks(query: string, type = 'track%2Cartist', authToken) {
    console.log(authToken.access_token);
    this.searchUrl = 'https://api.spotify.com/v1/search?q=' + query + '&type=track%2Cartist&market=US&limit=15&offset=5';
    return this.httpClient.get(this.searchUrl, {
      headers: {
        Authorization: 'Bearer ' + authToken.access_token
      }
    });
  }

}
