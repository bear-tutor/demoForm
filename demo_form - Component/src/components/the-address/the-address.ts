import { Component } from '@angular/core';

/**
 * Generated class for the TheAddressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'the-address',
  templateUrl: 'the-address.html'
})
export class TheAddressComponent {

  text: string;

  constructor() {
    console.log('Hello TheAddressComponent Component');
    this.text = 'Hello World';
  }

}
