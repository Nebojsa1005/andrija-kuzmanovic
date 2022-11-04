import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactInfo: any = [
    { icon:  'info', type: 'text', data: 'Andrija Kuzmanović'},
    { icon: 'phone', type: 'text', data: '+381 64 9122301' },
    { icon: 'location', type: 'text', data:'Belgrade, Serbia' },
    { icon: 'linked_in', type: 'text', data: 'linkedin.com/in/andrijakuzmanovic' },
    { icon: 'mail', type: 'text', data:'andrijakuzmanovicc@gmail.com' }
  ]

}