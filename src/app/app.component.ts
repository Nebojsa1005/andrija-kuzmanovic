import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { slideInAnimation } from './app.animation';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'andrija-kuzmanovic';

  destroy$: Subject<boolean> = new Subject()

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter(data => data instanceof NavigationEnd)
    ).subscribe((data: any ) => {
      console.log(data);
      
      data?.url === '/work' ? this.router.navigate(['/work', 'all-projects']) : null
    })
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return !(outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'])
  }

  ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.complete()
  }

}