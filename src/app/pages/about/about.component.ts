import { Education, WorkExperience } from './models/work-experience';
import { Component } from '@angular/core';
import { AboutService } from './services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
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
