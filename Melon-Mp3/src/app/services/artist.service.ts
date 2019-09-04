import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist.class';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  public artists: Artist[];
  public API : string ='http://localhost:3000/artists';

  constructor(private http : HttpClient) {}
 
  getAllArtist(): Observable<Artist[]>{
    return this.http.get<Artist[]>(`${this.API}`);
  }
  getArtist(id: number) : Observable<Artist>{
    return this.http.get<Artist>(`${this.API}/${id}`);
  }
  addArtist(artist:Artist): Observable<Artist>{
    return this.http.post<Artist>(`${this.API}`,artist);
  }
  editArtist(artist:Artist):Observable<Artist>{
    return this.http.put<Artist>(`${this.API}/${artist.id}`,artist)
  }
  deleteArtist(id: number): Observable<Artist>{
    return this.http.delete<Artist>(`${this.API}/${id}`);
  }
}

