import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading = false;
  constructor() {
  }

  public startLoading() {
    this.isLoading = true;
  }
  public stopLoading() {
    this.isLoading = false;
  }
}
