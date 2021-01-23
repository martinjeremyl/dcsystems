import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { MustMatch } from '../../helpers/mustMatch';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted = false;
  constructor(
    private AuthenticationService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private loaderService: LoaderService
  ) {
    this.registerForm = this.fb.group(
      {
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  ngOnInit(): void {}

  get f() {
    return this.registerForm.controls;
  }
  public register() {
    this.submitted = true;
    this.loaderService.startLoading();
    if (this.registerForm.valid) {
      this.AuthenticationService.register(this.registerForm.value).subscribe(
        () => {
          this.loaderService.stopLoading();
            this.router.navigate(['/login']);
        },
        () => {
          this.loaderService.stopLoading();
        }
      );
    } else {
      this.registerForm.markAllAsTouched();
      this.loaderService.stopLoading();
    }
  }
}
