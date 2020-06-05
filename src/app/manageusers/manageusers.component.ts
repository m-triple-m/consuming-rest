import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {

  users;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userservice.getAllUsers().subscribe( data => {
      console.log(data);
      this.users = data;
    })
  }

}
