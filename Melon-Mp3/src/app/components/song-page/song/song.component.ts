import { Component, OnInit, OnDestroy } from '@angular/core';
import { Song } from 'src/app/models/song.class';
import { Subscription } from 'rxjs';
import { SongService } from 'src/app/services/song.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit ,OnDestroy{

  public songs: Song[];
  public subscription: Subscription;
  public subscriptionplaylist: Subscription;

  constructor(
    public songService : SongService,
    public routerService: Router,
    public routerActivatedService: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.songService.getAllSongs().subscribe(data => {
      this.songs = data;
    })
  }
  onDeleteSong(id : number){
    if(window.confirm('Are you sure to delete this?')) {
    this.subscription = this.songService.deleteSong(id).subscribe((data : Song) =>
      {
        this.updateDataAfterDelete(id);
        this.routerService.navigate(['/melon.mp3.vn/song']);
      });
    }
  }
  updateDataAfterDelete(id : number){
    for (var i = 0; i < this.songs.length; i++) {
      if(this.songs[i].id == id){
        this.songs.splice(i, 1);
        break;
      }
      
    }
  }
  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
   

  }

}

