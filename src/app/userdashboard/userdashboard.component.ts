import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {


  currentUser;

  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.currentUser);
  }

}
