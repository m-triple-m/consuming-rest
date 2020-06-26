import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  otp;
  constructor() { }

  ngOnInit(): void {
  }

  generateOtp(){
    this.otp = Math.floor(1000+Math.random()*9000);
    console.log(this.otp);
  }

  sendEmail(email){
    this.generateOtp();
  }

}
