import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-mot-de-passe-oublie',
  templateUrl: './mot-de-passe-oublie.component.html',
  styleUrls: ['./mot-de-passe-oublie.component.scss']
})
export class MotDePasseOublieComponent implements OnInit {

  public forgottenPasswordForm: FormGroup;
  public submitted = false;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router, private loaderService: LoaderService) {
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
    this.loaderService.startLoading();
    if (this.forgottenPasswordForm.valid) {
        this.authenticationService.resetPassword(this.forgottenPasswordForm.value).subscribe(
          () => {
            this.router.navigate(['login']);
            this.loaderService.stopLoading();
          },
          () => {
            this.loaderService.stopLoading();
          }
        )
    } else {
      this.forgottenPasswordForm.markAllAsTouched();
      this.loaderService.stopLoading();
    }
  }
}
