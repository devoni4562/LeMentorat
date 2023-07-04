import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{

  form: FormGroup;
  apiUrl = 'http://localhost:8000/login';

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private cookieService: CookieService)
  {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm()
  {
    if (this.form.valid)
    {
      const formData = this.form.value;

      this.http.post<any>(this.apiUrl, formData)
        .pipe(
          tap(response =>
          {
            const token = response.token;
            console.log(response);
            this.cookieService.set('jwt_token', token);
            this.form.reset();
          })
        )
        .subscribe({
          next: () =>
          {

          },
          error: error =>
          {
            console.error(error);
          }
        });
    }
  }
}
