import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { from, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  public postUserSettingsForm(
    userSettings: UserSettings
  ): Observable<any> {
    // return of(userSettings);
    return this.http.post('https://putsreq.com/GCI18I7zIcUzL4t9BHa3', userSettings);
  }
}
