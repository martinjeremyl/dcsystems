import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { MotDePasseOublieComponent } from './components/mot-de-passe-oublie/mot-de-passe-oublie.component';

const authRoutes: Routes = [
  { path: 'register', component: InscriptionComponent},
  { path: 'login', component: ConnexionComponent},
  { path: 'reset-password', component: MotDePasseOublieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
