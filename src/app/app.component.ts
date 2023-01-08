import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { slideInAnimation } from './app.animation';
import { NavbarService } from './shared/services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'andrija-kuzmanovic';
  phoneMenu$?: Observable<boolean>;

  constructor(private navbarService: NavbarService, private router: Router) {
    this.phoneMenu$ = this.navbarService.phoneMenu;
  }

  prepareRoute(outlet: RouterOutlet) {
    return !(
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  phoneNavigation(path: string) {
    this.closePhoneMenu()
    this.router.navigate([path]);
  }

  closePhoneMenu() {
    this.navbarService.phoneMenu.next(false);
  }
}
