import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/services/authentication.service';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dcsystems';

  constructor(
    private authService: AuthenticationService,
    public loaderService: LoaderService
  ) {
    // Si on a un token en cookies on récupère l'utilisateur au près de l'API
    if (authService.isUserSignedIn() && authService.currentUser === undefined) {
      authService.getUserInfo();
    }
  }
}
