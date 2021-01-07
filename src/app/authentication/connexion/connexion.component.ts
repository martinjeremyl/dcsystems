import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted = false;
  constructor(private fb: FormBuilder, private AuthenticationService: AuthenticationService, private cookieService: CookieService) {
    this.loginForm = this.fb.group({
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  public login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.AuthenticationService.login(this.loginForm.value).subscribe(
        (response) => {
          this.cookieService.set('token', response.token);
        }
      )
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
