import { Component, OnInit, OnDestroy } from '@angular/core';
import { Playlist } from 'src/app/models/playlist.class';
import { Subscription } from 'rxjs';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Song } from 'src/app/models/song.class';


@Component({
  selector: 'app-playlist-name',
  templateUrl: './playlist-name.component.html',
  styleUrls: ['./playlist-name.component.css']
})
export class PlaylistNameComponent implements OnInit, OnDestroy {

  public playlist: Playlist;
  public list_song : Song[];
  public subscription: Subscription;
  public subscriptionplaylist: Subscription;

  constructor(public playlistService: PlaylistService,

    public routerService: Router,
    public routerActivatedService: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptionplaylist =  this.routerActivatedService.params.subscribe((data: Params) => {
      let id = data.id;
      this.subscription = this.playlistService.getPlaylist(id).subscribe((data : Playlist) =>{
         this.playlist = data;
        // this.list_song = data.list_song;
        console.log(this.list_song);
      });
    });
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

