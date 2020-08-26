import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PhoneMaskComponent} from './phone-mask.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {PhoneMaskDirective} from './phone-mask.directive';

@NgModule({
  declarations: [
    PhoneMaskComponent,
    PhoneMaskDirective
  ],
  imports: [CommonModule,
    RouterModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  exports: [
    PhoneMaskComponent,
    PhoneMaskDirective
  ]
})
export class PhoneMaskModule {
}
