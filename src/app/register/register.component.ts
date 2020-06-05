import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userform;
  users;

  constructor(private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.initForm();
    this.getUsersData();

    document.body.classList.add('bg-reg');
  }

  ngOnDestroy(){
    document.body.classList.remove('bg-reg');
  }

  initForm(){
    this.userform = this.fb.group({
      name : ['', Validators.required],
      username : ['', Validators.required],
      email : ['', [Validators.email, Validators.required]],
      password : ['', [Validators.minLength(5), Validators.required]],
      age : ['', Validators.required],
    })
  }

  formSubmit(formdata){

    if(this.userform.invalid){
      alert('form invalid');
      return;
    }

    console.log(formdata);
    this.userservice.addUser(formdata).subscribe((data) => {
      console.log(data);
    });
  }

  getUsersData(){
    this.userservice.getAllUsers().subscribe( data => {
      console.log(data);
    })
  }

  getRequired(){
    if(this.userform.controls.errors){
      return this.userform.controls.errors.required;
    }
  }

  getEmail(){
    if(this.userform.controls.errors){
      return this.userform.controls.errors.email;
    }
  }

}
