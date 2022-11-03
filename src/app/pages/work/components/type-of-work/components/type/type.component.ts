import { Router } from '@angular/router';
import { DataService } from '../../../../../../shared/services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { CarouselAlignMode, CarouselConfig } from 'ng-carousel-cdk';
import { Product } from 'src/app/pages/home/models/products';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  @Input() type: string = ''

  config: CarouselConfig<any> = {}
  configForm: FormGroup = {} as FormGroup
  wantedProducts: any = []

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeCarousel()
  }

  initializeCarousel() {
    this.wantedProducts = this.dataService.getProductsByType(this.type)
    
    this.config = {
      slideWidth: 42,
      alignMode: CarouselAlignMode.LEFT,
      transitionDuration: 500,
      autoplayDelay: 0,
      shouldLoop: false,
      items: this.wantedProducts,
      autoplayEnabled: false,
      dragEnabled: true,
      shouldRecalculateOnResize: true,
      recalculateDebounce: 300,
      allowKeyboardNavigation: true,
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
      shouldRecalculateOnResize: new FormControl(this.config.shouldRecalculateOnResize),
      recalculateDebounce: new FormControl(this.config.recalculateDebounce),
      allowKeyboardNavigation: new FormControl(this.config.allowKeyboardNavigation),
    });
  
  }

  viewProduct(productName: string) {
    this.router.navigate(['work','view', productName])
  }

}
