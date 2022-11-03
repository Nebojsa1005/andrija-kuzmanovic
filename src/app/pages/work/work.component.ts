import { filter, Subject, Subscription, takeUntil } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  routerSub$?: Subscription
  destroy$: Subject<boolean> = new Subject()

  ngOnInit(): void {    
    //  this.router.events.pipe(
    //   takeUntil(this.destroy$),
    //   filter(data => data instanceof NavigationEnd)
    //   ).subscribe(data => console.log(data))
    this.router.navigate(['/work', 'all-projects'])
  }

  ngOnDestroy() {
    // this.routerSub$?.unsubscribe()
    this.destroy$.next(true)
    this.destroy$.complete()
  }
}
