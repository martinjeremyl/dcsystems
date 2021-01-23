import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApi } from 'src/app/model/app.model';
import { environment } from 'src/environments/environment';
import { TokenResponse, User } from '../model/authentication';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUser: User | undefined;
  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {
  }

  public register(newUser: User): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${environment.urlApi}register`, newUser);
  }

  public login(credentials: Credential) {
    return this.http.post<TokenResponse>(`${environment.urlApi}login_check`, credentials);
  }

  public resetPassword(email: string) {
    return this.http.post<ResponseApi>(`${environment.urlApi}user/reset-password`, email);
  }

  public isUserSignedIn(): boolean {
    return this.cookieService.check('token');
  }

  public getUserToken(): string {
    return this.cookieService.get('token');
  }

  public removeToken(): void {
    if (this.isUserSignedIn()) {
      this.cookieService.delete('token');
    }
  }
  public getUserInfo(): void {
    if (this.isUserSignedIn()) {
      this.http.get<ResponseApi>(`${environment.urlApi}user`).subscribe(
        (response) => {
          this.currentUser = response.item;
          if (!this.currentUser?.hasCompletedInformations) {
            this.router.navigate(['more-information']);
          }
        }
      )
    }
  }

  public moreInformations(user: User): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${environment.urlApi}user/update-main-informations`, user);
  }

  public uploadAvatar(avatar: File) {
    const endpoint = `${environment.urlApi}user/avatar`;
    const formData: FormData = new FormData();
    formData.append('avatar', avatar, avatar.name);
    return this.http
      .post(endpoint, formData);
  }

  public getAvatar() {
      return this.http.get(`${environment.urlApi}user/avatar`, { responseType: 'blob' });
  }
}
