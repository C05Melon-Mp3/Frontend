import { Injectable } from '@angular/core';
import { Song } from '../models/song.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs: Song[];
  public API : string ='http://localhost:3000/songs';

  constructor(private http : HttpClient) {}
 
  getAllSong(): Observable<Song[]>{
    return this.http.get<Song[]>(`${this.API}`);
  }
  getSong(id: number) : Observable<Song>{
    return this.http.get<Song>(`${this.API}/${id}`);
  }
  addSong(song:Song): Observable<Song>{
    return this.http.post<Song>(`${this.API}`,song);
  }
  editSong(song:Song):Observable<Song>{
    return this.http.put<Song>(`${this.API}/${song.id}`,song)
  }
  deleteSong(id: number): Observable<Song>{
    return this.http.delete<Song>(`${this.API}/${id}`);
  }

}
