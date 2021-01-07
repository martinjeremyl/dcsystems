import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-mot-de-passe-oublie',
  templateUrl: './mot-de-passe-oublie.component.html',
  styleUrls: ['./mot-de-passe-oublie.component.scss']
})
export class MotDePasseOublieComponent implements OnInit {

  public forgottenPasswordForm: FormGroup;
  public submitted = false;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {
    this.forgottenPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.forgottenPasswordForm.controls;
  }

  public resetPassword() {
    this.submitted = true;
    if (this.forgottenPasswordForm.valid) {

    } else {
      this.forgottenPasswordForm.markAllAsTouched();
    }
  }
}
