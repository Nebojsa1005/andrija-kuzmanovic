import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarouselAlignMode, CarouselConfig } from 'ng-carousel-cdk';
import { DataService } from '../../../../../../shared/services/data.service';
import { isMobile } from 'is-mobile'

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent implements OnInit {
  @Input() type: string = '';

  config: CarouselConfig<any> = {};
  configForm: FormGroup = {} as FormGroup;
  wantedProducts: any = [];
  baseImageSrc: string = '../../../../../assets/products/'

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.initializeCarousel();
  }
  initializeCarousel() {
    this.wantedProducts = this.dataService.getProductsByType(this.type);

    this.config = {
      slideWidth: !isMobile() ? 42 : 100,
      alignMode: CarouselAlignMode.LEFT,
      transitionDuration: 500,
      autoplayDelay: 0,
      shouldLoop: true,
      items: this.wantedProducts,
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

  viewProduct(productName: string) {
    this.router.navigate(['work', 'view', productName]);
  }
}
