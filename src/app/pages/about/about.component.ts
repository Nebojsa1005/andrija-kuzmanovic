import { Education, WorkExperience } from './models/work-experience';
import { Component } from '@angular/core';
import { AboutService } from './services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  workExperience: WorkExperience[] = this.aboutService.workExperience
  educations: Education[] = this.aboutService.educations

constructor( private aboutService: AboutService ) { }

}
