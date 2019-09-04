import { Component, OnInit, OnDestroy } from '@angular/core';
import { Song } from 'src/app/models/song.class';
import { Subscription } from 'rxjs';
import { SongService } from 'src/app/services/song.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/app/models/playlist.class';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  public songs: Song[];
  public playlist : Playlist[];
  public subscription: Subscription;
  public subscriptionplaylist: Subscription;

  constructor(public playlistService: PlaylistService,
    public songService : SongService,
    public routerService: Router,
    public routerActivatedService: ActivatedRoute

  ) { }

  ngOnInit() {
    this.subscription = this.songService.getAllSong().subscribe(data => {
      this.songs = data;
    })
    this.subscriptionplaylist = this.playlistService.getAllPlaylist().subscribe(data => {
      this.playlist = data;
    })
  }
  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionplaylist) {
      this.subscriptionplaylist.unsubscribe();
    }

  }

}
