import { Component, OnInit, OnDestroy } from '@angular/core';
import { Playlist } from 'src/app/models/playlist.class';
import { Subscription } from 'rxjs';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-add',
  templateUrl: './playlist-add.component.html',
  styleUrls: ['./playlist-add.component.css']
})
export class PlaylistAddComponent implements OnInit, OnDestroy {

  public playlist: Playlist;
  public subscription: Subscription;

  constructor(
    public playlistService: PlaylistService,
    public routerService: Router
  ) { }

  ngOnInit() {
    this.playlist = new Playlist();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onAddPlaylist() {

    this.subscription = this.playlistService.addPlaylist(this.playlist).subscribe(data => {
      if (data.id && data) {
        this.routerService.navigate(['/melon.mp3.vn/playlist']);
      }
    });

  }


}
