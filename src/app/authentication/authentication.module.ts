import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConnexionComponent } from './connexion/connexion.component';
import { MotDePasseOublieComponent } from './mot-de-passe-oublie/mot-de-passe-oublie.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [ConnexionComponent, MotDePasseOublieComponent, InscriptionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],
  providers: [CookieService],
  exports: [ConnexionComponent, MotDePasseOublieComponent, InscriptionComponent]
})
export class AuthenticationModule { }
