import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService
{

  token: string | null;
  admin: any;
  apiUrl = 'http://localhost:8000/api/login';

  constructor(private cookieService: CookieService, private http: HttpClient)
  {
    this.token = this.cookieService.get('jwt_token');
  }

  isAuthenticated(): boolean
  {
    return this.token !== null;
  }

  public login(formData: any)
  {

    let responseMessage;

    this.http.post<any>(this.apiUrl, formData)
      .pipe(
        tap(response =>
        {
          this.token = response.token;
          responseMessage = response.message;
          this.admin = response.admin;
          console.log(response);
          console.log(typeof response.admin);
          this.cookieService.set('jwt_token', response.token);
        })
      )
      .subscribe({
        next: () =>
        {
          console.log(this.admin);
        },
        error: error =>
        {
          console.error(error);
        }
      });

    return responseMessage;
  }
}
