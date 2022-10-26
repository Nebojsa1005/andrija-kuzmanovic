import { AngularMaterialModule } from './../../angular-material.module';
import { MatIconModule } from '@angular/material/icon';
import { WorkComponent } from './work.component';
import { NgModule } from '@angular/core';
import { WorkRoutingModule } from './work-routing.module';
import { TypeOfWorkComponent } from './components/type-of-work/type-of-work.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './components/view/view.component';

import { CarouselModule } from 'ng-carousel-cdk';
import { TypeComponent } from './components/type-of-work/components/type/type.component';

@NgModule({
  declarations: [
    WorkComponent,
    TypeOfWorkComponent,
    AllProjectsComponent,
    ViewComponent,
    TypeComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    CarouselModule,
    AngularMaterialModule
  ],
  providers: [],
})
export class WorkModule { }