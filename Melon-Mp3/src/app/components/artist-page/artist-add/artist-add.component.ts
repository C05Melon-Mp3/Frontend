import { Component, OnInit, OnDestroy } from '@angular/core';
import { Artist } from 'src/app/models/artist.class';
import { Subscription } from 'rxjs';
import { ArtistService } from 'src/app/services/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-add',
  templateUrl: './artist-add.component.html',
  styleUrls: ['./artist-add.component.css']
})
export class ArtistAddComponent implements OnInit ,OnDestroy{

  public artist: Artist;
  public subscription: Subscription;

  constructor(
    public artistService: ArtistService,
    public routerService: Router
  ) { }

  ngOnInit() {
    this.artist = new Artist();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onAddArtist() {

    this.subscription = this.artistService.addArtist(this.artist).subscribe(data => {
      if (data.id && data) {
        this.routerService.navigate(['/melon.mp3.vn/artist']);
      }
    });

  }

}
