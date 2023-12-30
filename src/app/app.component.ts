import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //
  constructor(private service: MyService) {};

  okStatus: boolean = false;
  didUserSayYes = false;

  handleUserCredentials(email: string, password: string, jobNames: string, phoneNumber: string) {
    this.service.postUserCredentials_(email, password, jobNames, phoneNumber)
      .subscribe(res => {
        setTimeout(() =>{
          this.okStatus = false;
        }, 5000)
        this.okStatus = true;
      });
  }



}
