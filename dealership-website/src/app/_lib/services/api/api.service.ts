import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'https://dealeractive-api-prod.azurewebsites.net/cars/search';

  constructor(private httpClient: HttpClient) {
  }

  public getNews() {
    return this.httpClient.get(`${this.API_KEY}`);
  }
}
