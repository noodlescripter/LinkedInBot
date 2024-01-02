import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {MyService} from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: MyService) {
  };

  okStatus: boolean = false;
  didUserSayYes = false;
  aknowlegdement: string = "I acknowledge that my LinkedIn account might subject to potential disablement or permanent deactivation if step given by developer is not followed properly. I understand and agree that the developers of this application cannot be held liable for any such actions taken by LinkedIn"
  phoneNumberRequired: any;
  jobNameRequired: any;
  handleUserCredentials(email: string, password: string, jobNames: string, phoneNumber: string) {
    this.service.postUserCredentials_(email, password, jobNames, phoneNumber)
      .subscribe(res => {
        setTimeout(() => {
          this.okStatus = false;
        }, 5000)
        this.okStatus = true;
      });
  }



}
