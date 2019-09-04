import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song.class';
import { Subscription } from 'rxjs';
import { SongService } from 'src/app/services/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.css']
})
export class SongAddComponent implements OnInit {

  public song : Song;
  public subscription : Subscription;

  constructor(
    public songService : SongService,
    public routerService : Router
    ) { }

  ngOnInit() {
    this.song = new Song();
  }
  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onAddSong(){

    this.subscription = this.songService.addSong(this.song).subscribe(data => {
      if (data.id && data) {
        this.routerService.navigate(['/melon.mp3.vn/song']);
      }
    });

  }


}
