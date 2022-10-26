import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
})
export class AngularMaterialModule { }