import { Component, OnInit, OnDestroy } from '@angular/core';
import { Artist } from 'src/app/models/artist.class';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Song } from 'src/app/models/song.class';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-name',
  templateUrl: './artist-name.component.html',
  styleUrls: ['./artist-name.component.css']
})
export class ArtistNameComponent implements OnInit ,OnDestroy{

  public artist: Artist;
  public list_song : Song[];
  public subscription: Subscription;
  public subscriptionArtist: Subscription;

  constructor(public artistService: ArtistService,

    public routerService: Router,
    public routerActivatedService: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptionArtist =  this.routerActivatedService.params.subscribe((data: Params) => {
      let id = data.id;
      this.subscription = this.artistService.getArtist(id).subscribe((data : Artist) =>{
        this.artist = data;
        // this.list_song = data.list_song;
        console.log(this.list_song);
      });
    });
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
