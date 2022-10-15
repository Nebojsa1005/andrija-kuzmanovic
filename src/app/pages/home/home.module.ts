import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ng-carousel-cdk';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MatToolbarModule,
    HomeRoutingModule,  ],
  providers: [],
})
export class HomeModule { }