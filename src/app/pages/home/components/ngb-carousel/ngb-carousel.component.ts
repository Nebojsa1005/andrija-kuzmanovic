import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { CarouselItem } from '../../models/products';

@Component({
  selector: 'app-ngb-carousel',
  templateUrl: './ngb-carousel.component.html',
  styleUrls: ['./ngb-carousel.component.css'],
})
export class NgbCarouselComponent implements OnInit, OnDestroy {
  @Input() images?: CarouselItem[];

  paused = true;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = false;
  pauseOnFocus = false;

  @ViewChild('carousel', { static: true }) carousel?: NgbCarousel;

  constructor(private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.transparent.next(true);
  }

  ngOnDestroy(): void {
    this.navbarService.transparent.next(false);
  }
}
