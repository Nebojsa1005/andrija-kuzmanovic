
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarouselConfig, CarouselWidthMode } from 'ng-carousel-cdk';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

export interface CarouselItem {
  name: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent implements OnInit {

  config: CarouselConfig<CarouselItem> = {
      slideWidth: 100,
      transitionDuration: 2500,
      shouldLoop: true,
      items: this.assignItems(3),
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
  private readonly destroyed$ = new Subject<void>();

  constructor(
      private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
      this.maxWidth = this.getMaxWidth(this.config.widthMode);
  }

  ngOnDestroy() {
      this.destroyed$.next();
      this.destroyed$.complete();
  }

  setItemIndex(newIndex: number): void {
      this.itemIndex = newIndex;
  }

  emitLog(): void {
      console.log('Button was clicked');
  }


  private getMaxWidth(mode?: CarouselWidthMode): number {
      return mode === CarouselWidthMode.PERCENT
          ? this.MAX_WIDTH_PERCENTS
          : this.MAX_WIDTH_PIXELS;
  }

  private assignItems(quantity: number): CarouselItem[] {
      const items = [];
      for (let i = 0; i < quantity; i++) {
          items.push({name: i + 1, image: `url(https://via.placeholder.com/150)`});
      }

      return items;
  }

}
