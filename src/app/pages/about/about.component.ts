import { Education, WorkExperience } from './models/work-experience';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutService } from './services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {

  workExperience?: WorkExperience[];
  educations?: Education[];
  introductionText?: string

  constructor(private aboutService: AboutService) {
    this.workExperience = this.aboutService.workExperience;
    this.educations = this.aboutService.educations;
    this.introductionText = this.aboutService.introductionText
  }
}
