import { Injectable } from '@angular/core';
import { Account } from "../models/account.class"
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // ,'Access-Control-Allow-Origin': 'http://localhost:4200'
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  registerUrl = "http://localhost:9999/register";
  private baseUrl = 'http://localhost:9999/accounts';


  registerUser(userInfo: Account): Observable<any> {
    return this.http.post<any>(this.registerUrl, userInfo, httpOptions);
  }
  // addSong(song:Song): Observable<Song>{
  //   return this.http.post<Song>(`${this.API}`,song);
  // }

  updatePassword(id: number, newPassword: String, currentPassword: String): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-password/${id}`, { newPassword: newPassword, currentPassword: currentPassword });
  }
  // updatePassword(id: number, newPassword: String, currentPassword: String): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/update-password/${id}`, { newPassword: newPassword, currentPassword: currentPassword });
  // }
  getAccountById(id: number) {
    return this.http.get<Account>(this.baseUrl + '/show/' + id);
  }

  getAllAccounts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  updateUserInformation(account: Account) {
    return this.http.put(this.baseUrl + '/update-user/' + account.id, account);
  }
}
