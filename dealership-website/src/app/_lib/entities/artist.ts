export class Artist {
  id: number;
  name: string;
  genres: any;
  albums: Album[];

}

export class Album {
  id: number;
}

export class Track {
  name: string;
  images: any;
}
