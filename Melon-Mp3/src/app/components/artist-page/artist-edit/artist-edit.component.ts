import { Component, OnInit, OnDestroy } from '@angular/core';
import { Artist } from 'src/app/models/artist.class';
import { Subscription } from 'rxjs';
import { ArtistService } from 'src/app/services/artist.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.css']
})
export class ArtistEditComponent implements OnInit,OnDestroy {

  public artist : Artist;
  public subscription : Subscription;
  public subscriptionParams : Subscription;

  constructor(
    public artistService : ArtistService,
    public routerService : Router,
    public activatedRouteService: ActivatedRoute
    ) { 

    }

  ngOnInit() {
    this.artist = new Artist();
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
      this.subscription = this.artistService.getArtist(id).subscribe((data : Artist) =>{
        this.artist = data;
      });
    });
  }

  onUpdateArtist(){
      this.subscription = this.artistService.editArtist(this.artist).subscribe((data : Artist) => {
            this.routerService.navigateByUrl('/melon.mp3.vn/artist');
    });
  }  

}
