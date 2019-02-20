import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'the-address',
  templateUrl: 'the-address.html'
})
export class TheAddressComponent {

  @Input('formItem') public formItem: FormGroup;
  private submitRequested: boolean;

  constructor(private fb: FormBuilder) {
    this.formItem = fb.group({
      'street': [null, Validators.required],
      'city': [null, Validators.required],
      'state': [null, Validators.required],
      'zipcode': [null, Validators.required]
    })
  }

  onSubmit() {
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    var ctrl = this.formItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
    // 
  }

}
