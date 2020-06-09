import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {

  users;
  currentUser;
  showeditform = false;
  editform;

  constructor(private userservice: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {

    // this.currentUser = sessionStorage.getItem('username');
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));

    this.getUsers();
  }

  getUsers(){
    this.userservice.getAllUsers().subscribe( data => {
      console.log(data);
      this.users = data;
    })
  }

  deleteUser(id){
    this.userservice.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    })
  }

  initUser(user){
    this.editform = this.fb.group(user);
  }

  formSubmit(formdata){

    if(this.editform.invalid){
      alert('form invalid');
      return;
    }

    console.log(formdata);
    this.userservice.updateUser(this.editform.value._id, formdata).subscribe((data) => {
      console.log(data);
      this.getUsers();
    });
  }

  updateUser(user){
    this.showeditform = true;
    this.initUser(user);
  }

}
