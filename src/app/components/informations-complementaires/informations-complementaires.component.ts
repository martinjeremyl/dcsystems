import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-informations-complementaires',
  templateUrl: './informations-complementaires.component.html',
  styleUrls: ['./informations-complementaires.component.scss'],
})
export class InformationsComplementairesComponent implements OnInit {
  fileToUpload: File | null | undefined;
  fileUrl: string | undefined;
  color = '#ae6dbc';
  step = 1;
  moreInformationsForm: FormGroup;
  constructor(
    public authService: AuthenticationService,
    private fb: FormBuilder,
    private loaderService: LoaderService
  ) {
    this.moreInformationsForm = this.fb.group({
      couleur: [''],
      instagram: [''],
      facebook: [''],
      youtube: [''],
      soundcloud: [''],
      spotify: [''],
      telephone: [''],
      site: [''],
      adresse: [''],
    });
  }

  ngOnInit(): void {}

  handleAvatarUpload(event: any) {
    this.fileToUpload = event.target.files[0];
    if (this.fileToUpload instanceof File) {
      var reader = new FileReader();
      reader.readAsDataURL(this.fileToUpload);
      reader.onload = (event: any) => {
        this.fileUrl = event.target.result;
      };
    }
  }

  nextStep() {
    if (this.step < 4) {
      this.step++;
    }
  }

  previousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  changeStep(step: number) {
    this.step = step;
  }

  submitMoreInformations() {
    this.loaderService.startLoading();
    this.moreInformationsForm.patchValue({
      couleur: this.color,
    });
    if (this.moreInformationsForm.valid) {
      this.authService
        .moreInformations(this.moreInformationsForm.value)
        .subscribe(
          () => {
            if (this.fileToUpload instanceof File) {
              this.authService.uploadAvatar(this.fileToUpload).subscribe(
                () => {
                  this.loaderService.stopLoading();
                },
                () => {
                  this.loaderService.stopLoading();
                }
              );
            }
          },
          () => {
            this.loaderService.stopLoading();
          }
        );
    } else {
      this.moreInformationsForm.markAllAsTouched();
      this.loaderService.stopLoading();
    }
  }
}
