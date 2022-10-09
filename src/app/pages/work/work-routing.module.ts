import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { TypeOfWorkComponent } from './components/type-of-work/type-of-work.component';
import { WorkComponent } from './work.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'work' },
  {
    path: '', component: WorkComponent, children: [
      { path: 'all-projects', component: AllProjectsComponent },
      { path: 'type-of-work', component: TypeOfWorkComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
