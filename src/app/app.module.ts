import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InformationsComplementairesComponent } from './components/informations-complementaires/informations-complementaires.component';
import { httpInterceptorProviders } from './http-interceptors';
import { ColorPickerModule } from 'ngx-color-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from './services/loader.service';
import { HomeVisitorComponent } from './components/home-visitor/home-visitor.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationsComplementairesComponent,
    HomeVisitorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    NgbModule,
    ColorPickerModule,
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorProviders, LoaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
