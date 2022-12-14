import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
})
export class AboutModule { }