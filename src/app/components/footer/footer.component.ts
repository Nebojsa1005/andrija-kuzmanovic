import { DataService, UserData } from './../../shared/services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  userData: UserData

  constructor(private dataService: DataService) { 
    this.userData = this.dataService.userData
  }
}
