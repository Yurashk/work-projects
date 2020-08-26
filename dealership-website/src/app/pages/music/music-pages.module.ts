import {NgModule} from '@angular/core';
import {SongsPageComponent} from './songs-page';

import {MusicRouting} from './music-pages.routing';
import {SpotifyTrackPickerModule} from '../../_lib';
import {SpotifyTokenPageComponent} from './spotify-token-page';
import {MusicPagesComponent} from './music-pages.component';

@NgModule({
  declarations: [
    MusicPagesComponent,
    SongsPageComponent,
    SpotifyTokenPageComponent
  ],
  imports: [
    MusicRouting,
    SpotifyTrackPickerModule
  ]
})
export class MusicPagesModule {
}


