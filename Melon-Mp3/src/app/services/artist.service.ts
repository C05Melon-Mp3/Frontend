import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist.class';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  public artistUrl : string ='http://localhost:8080/artists';

  constructor(private http : HttpClient) {}
 
  getAllArtist(): Observable<Artist[]>{
    return this.http.get<Artist[]>(`${this.artistUrl}`);
  }
  getArtist(id: number) : Observable<Artist>{
    return this.http.get<Artist>(`${this.artistUrl}/${id}`);
  }
  addArtist(artist:Artist): Observable<Artist>{
    return this.http.post<Artist>(`${this.artistUrl}`,artist);
  }
  editArtist(artist:Artist):Observable<Artist>{
    return this.http.put<Artist>(`${this.artistUrl}/update-artist/${artist.id}`,artist)
  }
  deleteArtist(id: number): Observable<Artist>{
    return this.http.delete<Artist>(`${this.artistUrl}/delete-artist/${id}`);
  }
}