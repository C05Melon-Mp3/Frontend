import { Component, OnInit, OnDestroy } from '@angular/core';
import { Song } from 'src/app/models/song.class';
import { Artist } from 'src/app/models/artist.class';
import { Subscription } from 'rxjs';
import { ArtistService } from 'src/app/services/artist.service';
import { SongService } from 'src/app/services/song.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit ,OnDestroy {
  public songs: Song[];
  public artists: Artist[];
  public subscription: Subscription;
  public subscriptionArtist: Subscription;

  constructor(public artistService: ArtistService,
    public songService : SongService,
    public routerService: Router,
    public routerActivatedService: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.songService.getAllSongs().subscribe(data => {
      this.songs = data;
    })
    this.subscriptionArtist = this.artistService.getAllArtist().subscribe(data => {
      this.artists = data;
    })
  }
  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionArtist) {
      this.subscriptionArtist.unsubscribe();
    }

  }

}
