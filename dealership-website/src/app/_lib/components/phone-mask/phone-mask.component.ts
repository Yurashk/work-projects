import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {PhoneMaskService} from '../../services/phone-mask.service';
import {CountriesWithMasks} from './constants/countries';


@Component({
  selector: 'app-phone-mask',
  templateUrl: './phone-mask.component.html',
  styleUrls: ['./phone-mask.component.scss']
})
export class PhoneMaskComponent {
  /// fields
  public countrySelected = {
    name: 'United States',
    iso2: 'us',
    dialCode: '1',
    format: ' +. (...) ...-....',
    priority: 0
  };

  /// constants
  public countriesFilter = null;
  public phoneNumber = null;
  /// validation
  public form: FormGroup;

  /// predicates
  public isVisible = false;

  /// constructor
  constructor(private formBuilder: FormBuilder, private phoneMaskService: PhoneMaskService) {
    this.countriesFilter = CountriesWithMasks;
    this.form = formBuilder.group({
      phone: ['']
    });
    for (let i = 0; i < this.countriesFilter.length; i++) {
      let country = this.countriesFilter[i];
      this.countriesFilter[i] = {
        name: country[0],
        regions: country[1],
        iso2: country[2],
        dialCode: country[3],
        format: country[4] || undefined,
        priority: country[5] || 0,
        hasAreaCodes: country[6] ? true : false,
      } as any;
    }
  }

  /// methods

  public phoneOnKey() {
    if (this.phoneNumber) {
      const x = this.phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.phoneNumber = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    }
  }

  selectedCountry(country) {
    this.countrySelected = country;
    this.phoneMaskService.countryChanged(country.iso2);
  }

  submit(code, phoneNumber, country) {
    console.log(`+${code} ${phoneNumber} ${country}`);
  }

}
