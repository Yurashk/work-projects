import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';
import {SpotifyTrackPickerComponent} from './spotify-track-picker.component';
import {ApiSongsService} from './service/api-songs.service';

@NgModule({
  declarations: [
    SpotifyTrackPickerComponent
  ],
  imports: [CommonModule, FormsModule],
  providers: [ApiSongsService],
  exports: [
    SpotifyTrackPickerComponent
  ]
})
export class SpotifyTrackPickerModule {
}
