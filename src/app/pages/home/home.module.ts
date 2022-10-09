import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ng-carousel-cdk';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MatToolbarModule,
    HomeRoutingModule
  ],
  providers: [],
})
export class HomeModule { }