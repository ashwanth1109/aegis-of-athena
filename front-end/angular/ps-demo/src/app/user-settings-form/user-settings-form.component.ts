import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor() {}

  ngOnInit() {}

  public onSubmit(form: NgForm) {
    console.log('onSubmit', form.valid);
  }

  public onBlur(nameField: NgModel) {
    console.log('onBlur', nameField.valid);

  }
}
