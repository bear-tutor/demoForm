import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {

  public form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
    this.form = fb.group({
      'firstname': null,
      'lastname': [null,Validators.required],
      'address': fb.group({
        'street': [null,Validators.required],
        'city': [null,Validators.required],
        'state': [null,Validators.required],
        'zipcode': [null,Validators.required],
      }),
      'schoolInfo': fb.group({
        'schoolName': [null, Validators.required],
        'gpa': [null, Validators.required],
        'schooladdress': fb.group({
          'street': [null, Validators.required],
          'city': [null, Validators.required],
          'state': [null, Validators.required],
          'zipcode': [null, Validators.required],
        })
      })
    })
  }

  ionViewDidLoad() {
    let data = this.navParams.get('user');
    this.form.setValue(data);
    console.log(this.form.value);
  }

}
