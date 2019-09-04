import { Component, OnInit, OnDestroy } from '@angular/core';
import { Playlist } from 'src/app/models/playlist.class';
import { Subscription } from 'rxjs';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnInit,OnDestroy {

  public playlist : Playlist;
  public subscription : Subscription;
  public subscriptionParams : Subscription;

  constructor(
    public playlistService : PlaylistService,
    public routerService : Router,
    public activatedRouteService: ActivatedRoute
    ) { 

    }

  ngOnInit() {
    this.playlist = new Playlist();
    this.loadData();
  }

  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }
  }

  loadData(){
    this.subscriptionParams =  this.activatedRouteService.params.subscribe((data: Params) => {
      let id = data.id;
      this.subscription = this.playlistService.getPlaylist(id).subscribe((data : Playlist) =>{
        this.playlist = data;
      });
    });
  }

  onUpdatePlaylist(){
      this.subscription = this.playlistService.editPlaylist(this.playlist).subscribe((data : Playlist) => {
            this.routerService.navigateByUrl('/melon.mp3.vn/playlist');
    });
  }  

}
