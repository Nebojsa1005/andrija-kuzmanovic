import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivateService {

  userData: any = {
    instagramLink: 'https://www.instagram.com/kuzmanovicaa/',
    linkedInLink: 'https://www.linkedin.com/in/andrijakuzmanovic/',
    facebookLink: 'https://www.facebook.com/wcsola/',
    firstName: 'Andrija',
    lastName: 'Kuzmanović'
  }
}
