import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {


  currentUser;

  showeditform = true;
  showmanageuser = false;
  editform;

  constructor(private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.currentUser);

    this.editform = this.fb.group(this.currentUser);
  }

  handleEvent(timesclicked){
    console.log(timesclicked); 
  }

  formSubmit(formdata){

    if(this.editform.invalid){
      alert('form invalid');
      return;
    }

    console.log(formdata);
    this.userservice.updateUser(this.editform.value._id, formdata).subscribe((data : any) => {
      console.log(data);
      sessionStorage.setItem('user', JSON.parse(data));
    });
  }

  hideall(){
    this.showeditform = false;
    this.showmanageuser = false;
  }

  toggleEditForm(){
    this.hideall();
    this.showeditform = true;
  }

  toggleManageUser(){
    this.hideall();
    this.showmanageuser = true;
  }

}
