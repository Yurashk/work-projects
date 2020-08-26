import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MusicPagesComponent} from './music-pages.component';
import {SongsPageComponent} from './songs-page';
import {SpotifyTokenPageComponent} from './spotify-token-page';

export const routes: Routes = [
  {
    path: '',
    component: MusicPagesComponent,
    children: [
      {
        path: '',
        component: SongsPageComponent
      },
      {
        path: 'spotify',
        component: SpotifyTokenPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRouting {
}
