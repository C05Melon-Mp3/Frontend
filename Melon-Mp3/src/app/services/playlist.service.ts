import { Injectable } from '@angular/core';
import { Playlist } from '../models/playlist.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  public playlistUrl : string ='http://localhost:9999/playlists';
  constructor(private http : HttpClient) {}
 
  getAllPlaylist(): Observable<Playlist[]>{
    return this.http.get<Playlist[]>(`${this.playlistUrl}`);
  }
  getPlaylist(id: number) : Observable<Playlist>{
    return this.http.get<Playlist>(`${this.playlistUrl}/${id}`);
  }
  addPlaylist(playlist:Playlist): Observable<Playlist>{
    return this.http.post<Playlist>(`${this.playlistUrl}`,playlist);
  }
  editPlaylist(playlist:Playlist):Observable<Playlist>{
    return this.http.put<Playlist>(`${this.playlistUrl}/update-playlist/${playlist.id}`,playlist)
  }
  deletePlaylist(id: number): Observable<Playlist>{
    return this.http.delete<Playlist>(`${this.playlistUrl}/${id}`);
  }
}
