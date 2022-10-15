import { NavbarService } from './../../shared/services/navbar.service';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarouselConfig, CarouselWidthMode } from 'ng-carousel-cdk';

export interface CarouselItem {
  name: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent implements OnInit {

  carouselImages: CarouselItem[] = [
    { name: 'caffe-d-italia-social-media' },
    { name: 'ducati-genova' },
    { name: 'oshee-social-media' },
    { name: 'insel-sleep' }
  ]

  config: CarouselConfig<CarouselItem> = {
    slideWidth: 100,
    transitionDuration: 2000,
    autoplayDelay: 3000,
    shouldLoop: true,
    items: this.carouselImages,
    autoplayEnabled: true,
    dragEnabled: true,
    shouldRecalculateOnResize: true,
    recalculateDebounce: 300,
    allowKeyboardNavigation: true,
  };
  readonly configForm = new FormGroup({
    widthMode: new FormControl(this.config.widthMode),
    alignMode: new FormControl(this.config.alignMode),
    slideWidth: new FormControl(this.config.slideWidth),
    transitionDuration: new FormControl(this.config.transitionDuration),
    shouldLoop: new FormControl(this.config.shouldLoop),
    slidesQuantity: new FormControl((this.config?.items ?? []).length),
    autoplayEnabled: new FormControl(this.config.autoplayEnabled),
    dragEnabled: new FormControl(this.config.dragEnabled),
    shouldRecalculateOnResize: new FormControl(this.config.shouldRecalculateOnResize),
    recalculateDebounce: new FormControl(this.config.recalculateDebounce),
    allowKeyboardNavigation: new FormControl(this.config.allowKeyboardNavigation),
  });

  itemIndex = 0;
  maxWidth = 0;
  readonly MAX_WIDTH_PERCENTS = 110;
  readonly MAX_WIDTH_PIXELS = 1000;

  constructor(
    private navbarService: NavbarService
  ) { }

  ngOnInit() {
    this.navbarService.transparent.next(true)
    this.maxWidth = this.getMaxWidth(this.config.widthMode);
  }

  ngOnDestroy() {
    this.navbarService.transparent.next(false)
  }

  setItemIndex(newIndex: number): void {
    this.itemIndex = newIndex;
  }

  private getMaxWidth(mode?: CarouselWidthMode): number {
    return mode === CarouselWidthMode.PERCENT
      ? this.MAX_WIDTH_PERCENTS
      : this.MAX_WIDTH_PIXELS;
  }
}
