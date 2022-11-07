import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { NavbarService } from './../../shared/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  
  transparent$?: Subject<boolean>;
  phoneMenu: boolean = false

  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.transparent$ = this.navbarService.transparent;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;

    window.pageYOffset > element.clientHeight &&
    this.navbarService.transparent.value
      ? element.classList.add('navbar-inverse')
      : element.classList.remove('navbar-inverse');

  }
}
