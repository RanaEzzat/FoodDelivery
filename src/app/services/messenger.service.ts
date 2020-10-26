import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor() { }

  subject = new Subject();
  // tslint:disable-next-line:typedef
  sendMessage(product) {
    this.subject.next(product);
  }

  // using subscribe to handle the observable
  // tslint:disable-next-line:typedef
  getMessage() {
    return this.subject.asObservable();
  }

}
