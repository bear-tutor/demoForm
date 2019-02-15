import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DemoPage } from '../demo/demo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user: FormGroup;
  private submitRequested: boolean;

  constructor(public navCtrl: NavController, public fb: FormBuilder) {
    this.user = fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'address': fb.group({
        'street': [null, Validators.required],
        'city': [null, Validators.required],
        'state': [null, Validators.required],
        'zipcode': [null, Validators.required],
      }),
      'schoolInfo': fb.group({
        'schoolName': [null, Validators.required],
        'gpa': [null, [Validators.required, Validators.min(0), Validators.max(4)]],
        'schooladdress': fb.group({
          'street': [null, Validators.required],
          'city': [null, Validators.required],
          'state': [null, Validators.required],
          'zipcode': [null, Validators.required],
        })
      })
    })
  }

  onSubmit() {
    console.log(this.user.value)
    console.log(this.user.valid)
    // console.log(this.user.get('firstname').invalid);

    this.submitRequested = true;

    if (this.user.valid) {
      this.navCtrl.push("DemoPage", { user: this.user.value })
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.user.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }


}
