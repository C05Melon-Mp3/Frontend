import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// import { Observable } from 'rxjs';
import { User } from '../models/user.class';
import * as jwt_decode from 'jwt-decode';
import { JwtResponse } from '../models/jwt-response.class';
import { AuthLoginInfo } from '../models/login-info.class';
import { SignUpInfo } from '../models/signup-info.class';
import { SignUpFb } from '../models/sign-up-fb.class';
import { TokenStorageService } from '../auth/token-storage.service';
import { Account } from '../models/account.class';
import { Observable } from 'rxjs';


const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
        providedIn: 'root'
})
export class AuthUserService {


        private loginUrl = 'http://localhost:8080/api/auth/sign-in';
        private signupUrl = 'http://localhost:8080/api/auth/sign-up';
        private URL =       'http://localhost:8080/userInfo';
        private userUrl = 'http://localhost:8080/account';
        private editUrl = 'http://localhost:8080/user/edit-account/change-password'
        constructor(private http: HttpClient, private token: TokenStorageService) {
        }

        // getToken() {

        //   let currentUser = this.token.getToken();

        //   if (currentUser === null) return null;
        //   if (currentUser.accessToken === undefined) return null;
        //   return currentUser.accessToken;
        // }

        getTokenExpirationDate(token: string): Date {
                const decoded = jwt_decode(token);
                if (decoded.exp === undefined) return null;

                const date = new Date(0);
                date.setUTCSeconds(decoded.exp);
                return date;
        }

        isTokenExpired(token?: string): boolean {
                if (!token) token = this.token.getToken();
                if (!token) return true;
                const date = this.getTokenExpirationDate(token);
                if (date === undefined) return false;
                return !(date.valueOf() > new Date().valueOf());
        }
        checked: true;
        isLoggedIn(): boolean {
                // alert(this.isTokenExpired())
                return !this.isTokenExpired();
        }

        getAccount(): Observable<any> {
                const decoded = jwt_decode(this.token.getToken());
                const id = decoded.sub;
                return this.http.get<any>(`${this.userUrl}/${id}`, httpOptions);
        }
        getUser(): Observable<Account> {
                // const decoded = jwt_decode(this.token.getToken());
                // const id = decoded.sub;
                return this.http.get<Account>(`${this.URL}`)
        }

        updatePassword(id: number, newPass: string, oldPass: string) {
                return this.http.put(`${this.editUrl}/${id}`, { newPass: newPass, oldPass: oldPass });
        }

        attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
                return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
        }
        attemptAuthSocial(credentials: AuthLoginInfo): Observable<JwtResponse> {
                return this.http.post<JwtResponse>(this.signupUrl, credentials, httpOptions);
        }

        signUp(info: SignUpInfo): Observable<string> {
                return this.http.post<string>(this.signupUrl, info, httpOptions);
        }

        signUpFb(info: SignUpFb): Observable<string> {
                return this.http.post<string>(this.signupUrl, info, httpOptions);
        }
}
