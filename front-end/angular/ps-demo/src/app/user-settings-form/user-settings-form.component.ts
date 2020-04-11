import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

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
  private postError: boolean;
  private postErrorMessage: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  public onSubmit(form: NgForm) {
    console.log('onSubmit', form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => {
        console.log('success', result);
      },
      error => {
        this.onHttpError(error);
      }
    );
  }

  public onBlur(nameField: NgModel) {
    console.log('onBlur', nameField.valid);
  }

  private onHttpError(error: any) {
    this.postError = true;
    this.postErrorMessage = error;
  }
}
