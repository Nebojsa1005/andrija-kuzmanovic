import { NoDownloadDirective } from '../directives/no-download.directive';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [NoDownloadDirective],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    NoDownloadDirective
  ],
  providers: [],
})
export class SharedModule { }