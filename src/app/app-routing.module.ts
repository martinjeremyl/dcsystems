import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsSignedInGuard } from './authentication/guards/is-signed-in-guard';
import { InformationsComplementairesComponent } from './components/informations-complementaires/informations-complementaires.component';

const routes: Routes = [
  { path: 'more-information', component: InformationsComplementairesComponent, canActivate: [IsSignedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsSignedInGuard]
})
export class AppRoutingModule { }
