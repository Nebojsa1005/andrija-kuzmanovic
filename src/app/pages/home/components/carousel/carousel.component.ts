import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarouselConfig, CarouselWidthMode } from 'ng-carousel-cdk';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { CarouselItem } from '../../models/products';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() carouselImages: CarouselItem[] = [];

  config: CarouselConfig<CarouselItem> = {};
  configForm: FormGroup = {} as FormGroup;
  itemIndex = 0;
  maxWidth = 0;
  isMobile!: boolean

  readonly MAX_WIDTH_PERCENTS = 110;
  readonly MAX_WIDTH_PIXELS = 1000;

  constructor(private navbarService: NavbarService) {
    this.isMobile = window.screen.width <= 640
  }

  ngOnInit() {
    this.initializeCarousel();

    this.navbarService.transparent.next(true);
    this.maxWidth = this.getMaxWidth(this.config.widthMode);
  }

  setItemIndex(newIndex: number): void {
    this.itemIndex = newIndex;
  }

  getMaxWidth(mode?: CarouselWidthMode): number {
    return mode === CarouselWidthMode.PERCENT
      ? this.MAX_WIDTH_PERCENTS
      : this.MAX_WIDTH_PIXELS;
  }

  initializeCarousel() {
    this.config = {
      slideWidth: 100,
      transitionDuration: 1500,
      autoplayDelay: 2000,
      shouldLoop: true,
      items: this.carouselImages,
      autoplayEnabled: false,
      dragEnabled: true,
      shouldRecalculateOnResize: true,
      recalculateDebounce: 300,
      allowKeyboardNavigation: false,
    };

    this.configForm = new FormGroup({
      widthMode: new FormControl(this.config.widthMode),
      alignMode: new FormControl(this.config.alignMode),
      slideWidth: new FormControl(this.config.slideWidth),
      transitionDuration: new FormControl(this.config.transitionDuration),
      shouldLoop: new FormControl(this.config.shouldLoop),
      slidesQuantity: new FormControl((this.config?.items ?? []).length),
      autoplayEnabled: new FormControl(this.config.autoplayEnabled),
      dragEnabled: new FormControl(this.config.dragEnabled),
      shouldRecalculateOnResize: new FormControl(
        this.config.shouldRecalculateOnResize
      ),
      recalculateDebounce: new FormControl(this.config.recalculateDebounce),
      allowKeyboardNavigation: new FormControl(
        this.config.allowKeyboardNavigation
      ),
    });
  }

  @HostListener('window:resize', ['$event'])
  getImageSrc(productName: string): string {    
    let isMobile = window.screen.width <= 640 ? true : false;
    const base = '../../../../../assets/products/';
    const productSrc = base + productName + '/' + productName;

    return isMobile ? productSrc + '-h-lg.png' : productSrc + '.png';
  }

  ngOnDestroy() {
    this.navbarService.transparent.next(false);
  }
}
