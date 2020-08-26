import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneMaskService {

  private countrySubject = new Subject<string>();
  public countryObservable = this.countrySubject.asObservable();

  constructor() {
  }
  countryChanged(country: string){
    this.countrySubject.next(country);
  }
}
