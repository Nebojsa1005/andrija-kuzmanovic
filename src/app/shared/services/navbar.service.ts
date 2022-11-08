import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  phoneMenu: Subject<boolean> = new Subject()
  transparent = new BehaviorSubject(false)
}
