import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BehaviorSubject, map, Observable, Subject, take, tap } from 'rxjs';
import { slideInAnimation } from './app.animation';
import { NavbarService } from './shared/services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'andrija-kuzmanovic';
  phoneMenu$?: Observable<boolean>;
  // phoneMenu?: boolean

  constructor(private navbarService: NavbarService, private router: Router) {
    this.phoneMenu$ = this.navbarService.phoneMenu;
    this.phoneMenu$.subscribe(data=>console.log(data)
    )
    // this.phoneMenu$ = this.navbarService.phoneMenu
    // .pipe(
    //   tap(data => {
    //     this.phoneMenu = data
    //     console.log(this.phoneMenu);
    //   }))
  }

  prepareRoute(outlet: RouterOutlet) {
    return !(
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  phoneNavigation(path: string) {
    this.navbarService.phoneMenu.next(false);
    this.router.navigate([path]);
  }
}
