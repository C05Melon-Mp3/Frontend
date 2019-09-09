import { Component, OnInit, OnDestroy } from '@angular/core';
import { Song } from 'src/app/models/song.class';
import { Subscription } from 'rxjs';
import { SongService } from 'src/app/services/song.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit,OnDestroy {

  public song : Song;
  form: any = {};
  public subscription : Subscription;
  public subscriptionParams : Subscription;

  constructor(
    public songService : SongService,
    public routerService : Router,
    public activatedRouteService: ActivatedRoute
    ) { 

    }

  ngOnInit() {
    this.song = new Song(
      this.form.nameSong,
      this.form.descriptionSong,
      this.form.fileMp3,
      this.form.avatarSong,
      this.form.comment
    );
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
      this.subscription = this.songService.getSongById(id).subscribe((data : Song) =>{
        this.song = data;
      });
    });
  }

  onEditSong(){
      this.subscription = this.songService.editSong(this.song).subscribe((data : Song) => {
            this.routerService.navigate(['/melon.mp3.vn/song']);
    });
  }  

}
