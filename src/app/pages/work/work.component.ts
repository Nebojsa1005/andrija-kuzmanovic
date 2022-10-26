import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent {

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
    // this.router.navigate(['/work', 'all-projects'])
  }
}
