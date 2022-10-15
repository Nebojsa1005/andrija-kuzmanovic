import { NavbarService } from './../../shared/services/navbar.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  transparent$: any
  
  constructor(
    private navbarService: NavbarService
    ) { }
    
    ngOnInit(): void {
      this.transparent$ = this.navbarService.transparent
    }
    
    
@HostListener('window:scroll', ['$event'])
onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;    
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
  

}
