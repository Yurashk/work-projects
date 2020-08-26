import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAutoService {
  API_KEY = 'https://dealeractive-api-prod.azurewebsites.net/car/';

  constructor(private httpClient: HttpClient) {
  }

  public getId(Id) {
    return Id;
  }

  public getNews(id: number) {
    return this.httpClient.get(this.API_KEY + id);
  }
}
