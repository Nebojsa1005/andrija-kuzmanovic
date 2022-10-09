import { WorkComponent } from './work.component';
import { NgModule } from '@angular/core';
import { WorkRoutingModule } from './work-routing.module';
import { TypeOfWorkComponent } from './components/type-of-work/type-of-work.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';

@NgModule({
  declarations: [
    WorkComponent,
    TypeOfWorkComponent,
    AllProjectsComponent
  ],
  imports: [
    WorkRoutingModule
  ],
  providers: [],
})
export class WorkModule { }