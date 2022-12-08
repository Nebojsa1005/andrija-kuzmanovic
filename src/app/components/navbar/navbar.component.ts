import {
  ChangeDetectionStrategy,
  Component,
  HostListener
} from '@angular/core';
import { Subject } from 'rxjs';
import { NavbarService } from './../../shared/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  transparent$?: Subject<boolean>;
  phoneMenu?: Subject<boolean>;

  constructor(private navbarService: NavbarService) {
    this.transparent$ = this.navbarService.transparent;
    this.phoneMenu = this.navbarService.phoneMenu;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;

    window.pageYOffset > element.clientHeight &&
    this.navbarService.transparent.value
      ? element.classList.add('navbar-inverse')
      : element.classList.remove('navbar-inverse');
  }

  togglePhoneMenu(event: any) {
    this.navbarService.phoneMenu.next(event);
  }
}
