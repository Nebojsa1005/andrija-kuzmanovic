import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ng-carousel-cdk';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ProductListComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    CarouselModule,
    MatToolbarModule,
    HomeRoutingModule,
    NgbModule,
    MatButtonModule
  ]
})
export class HomeModule {}