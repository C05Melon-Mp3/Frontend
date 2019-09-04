import { Injectable } from '@angular/core';
import { Playlist } from '../models/playlist.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  public playlist: Playlist[];
  public API : string ='http://localhost:3000/playlist';

  constructor(private http : HttpClient) {}
 
  getAllPlaylist(): Observable<Playlist[]>{
    return this.http.get<Playlist[]>(`${this.API}`);
  }
  getPlaylist(id: number) : Observable<Playlist>{
    return this.http.get<Playlist>(`${this.API}/${id}`);
  }
  addPlaylist(playlist:Playlist): Observable<Playlist>{
    return this.http.post<Playlist>(`${this.API}`,playlist);
  }
  editPlaylist(playlist:Playlist):Observable<Playlist>{
    return this.http.put<Playlist>(`${this.API}/${playlist.id}`,playlist)
  }
  deletePlaylist(id: number): Observable<Playlist>{
    return this.http.delete<Playlist>(`${this.API}/${id}`);
  }
}
