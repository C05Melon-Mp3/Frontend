import { Injectable } from '@angular/core';
import { Song } from '../models/song.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // ,'Access-Control-Allow-Origin': 'http://localhost:4200'
};

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http : HttpClient) {}
 
  addUrl = "http://localhost:8080/songs/add";
  private baseUrl = 'http://localhost:8080/songs';

  //create new song
  addSong(song: Song): Observable<any> {
    return this.http.post<any>(this.addUrl, song, httpOptions);
  }


  //get all songs
  getAllSongs(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  //find 1 song
  getSongById(id: number){
    return this.http.get<Song>(this.baseUrl + '/show/' + id);
  }
  // addSong(song:Song): Observable<Song>{
  //   return this.http.post<Song>(`${this.API}`,song);
  // }
  editSong(song:Song){
    return this.http.put(this.baseUrl + '/update-song/'+ song.id, song);
  }
  // updateUserInformation(account:Account){
  //   return this.http.put(this.baseUrl+'/update-user/'+account.id,account);
  // }
  deleteSong(id: number){
    return this.http.delete(this.baseUrl + '/delete-song/'+ id);
  }

}
