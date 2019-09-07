import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist.class';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // ,'Access-Control-Allow-Origin': 'http://localhost:4200'
};
@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  public artistUrl : string ='http://localhost:8080/artists';

  constructor(private http : HttpClient) {}
 
  getAllArtist(): Observable<any>{
    return this.http.get(this.artistUrl);
  }
  getArtist(id: number){
    return this.http.get<Artist>(this.artistUrl + id);
  }
  addArtist(artist:Artist): Observable<any>{
    return this.http.post<any>(this.artistUrl,artist, httpOptions);
  }
  editArtist(artist:Artist){
    return this.http.put(this.artistUrl+ '/update-artist/' + artist.id, artist);
  }
  deleteArtist(id: number){
    return this.http.delete(this.artistUrl + '/delete-artist/' + id);
  }
}

