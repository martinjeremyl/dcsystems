import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApi } from 'src/app/model/app.model';
import { environment } from 'src/environments/environment';
import { TokenResponse, User } from '../model/authentication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public register(newUser: User): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${environment.urlApi}register`, newUser);
  }

  public login(credentials: Credential) {
    return this.http.post<TokenResponse>(`${environment.urlApi}login_check`, credentials);
  }

  public resetPassword(email: string) {
    return this.http.post<ResponseApi>(`${environment.urlApi}/user/reset-password`, email);
  }
}
