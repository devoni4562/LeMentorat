import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/authenticator/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  admins: any[] = [];
  form: FormGroup;
  authService: AuthService;

  constructor(private formBuilder: FormBuilder, authService: AuthService, private http: HttpClient)
  {
    this.authService = authService;

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm()
  {
    if (this.form.valid)
    {
      const formData = this.form.value;
      console.log(formData);
      this.authService.login(formData);


      this.form.reset();
    }
  }

  getAdmin()
  {
    this.http.get<any[]>('http://localhost:8000/api/admin/get_all_admin').subscribe(
      (data: any[]) =>
      {
        this.admins = data;
      }
    );
  }
}
