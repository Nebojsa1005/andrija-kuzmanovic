import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ng-carousel-cdk';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MatToolbarModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }