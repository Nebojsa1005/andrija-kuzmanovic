import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  
  title = 'andrija-kuzmanovic';

  prepareRoute(outlet: RouterOutlet) {
    return !(outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'])
  }

}