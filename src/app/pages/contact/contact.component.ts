import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Contact {
  icon: string,
  type: string,
  data: string,
  link?: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactComponent {
  contactInfo: Contact[] = [
    { icon:  'info', type: 'text', data: 'Andrija Kuzmanović'},
    { icon: 'phone', type: 'text', data: '+381 64 9122301' },
    { icon: 'location', type: 'text', data:'Belgrade, Serbia' },
    { icon: 'linked_in', type: 'link', data: 'LinkedIn', link: 'https://linkedin.com/in/andrijakuzmanovic' },
    { icon: 'mail', type: 'email', data: 'Email', link:'andrijakuzmanovicc@gmail.com' }
  ]
}