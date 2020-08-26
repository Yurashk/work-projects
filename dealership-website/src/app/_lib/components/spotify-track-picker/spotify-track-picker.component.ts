import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TrackItem} from './model/song.model';
import {ApiSongsService} from './service/api-songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './spotify-track-picker.component.html',
  styleUrls: ['./spotify-track-picker.component.scss']
})
export class SpotifyTrackPickerComponent {
  @Input() tracks: Array<TrackItem> = [];
  @Output() tracksRes = new EventEmitter<TrackItem[]>();

  constructor(private songService: ApiSongsService) {
  }

  public stateOfButton: boolean[];
  public songs: any;
  public selectedTracks = [];
  public tracksStorage = [];
  public inputValue: string;

  filterItem(value) {
    if (value.length) {
      this.songService.getAuth().subscribe(res => {
        this.songService.searchTracks(value, 'artist', res).subscribe(data => {
          this.songs = data;
          this.stateOfButton = this.songs.length;
        });
      });
    }
  }

  onSelectSong(value, track, id, imgUrl) {
    for (let i = 0; i < this.tracks.length; i++) {
      if (this.tracks[i].songId === id) {
        this.tracks.splice(i, 1);
        return false;
      }
    }
    this.tracksStorage = this.tracks;
    this.tracks = [{
      name: value,
      song: track,
      songId: id,
      songImg: imgUrl
    }];
    this.tracks.push.apply(this.tracks, this.tracksStorage);
  }

  selectedIndex(index) {
    if (index.target.classList.contains('btn-add-song')) {
      index.target.classList.remove('btn-add-song');
      return;
    }
    index.target.classList.add('btn-add-song');
    this.selectedTracks.push(index);
    this.tracksRes.emit(this.tracks);
  }

  deleteTrack(trackDelete) {
    for (let index = 0; index < this.tracks.length; index++) {
      if (this.tracks[index].songId === trackDelete) {
        this.tracks.splice(index, 1);
        this.tracksRes.emit(this.tracks);
        return false;
      }
    }
    return true;
  }

  /// TODO : replace later
  // Tracks_done() {
  //   console.log(this.tracksRes.emit(this.tracks));
  //   this.tracksRes.emit(this.tracks);
  //   this.tracks = [];
  // }
}


