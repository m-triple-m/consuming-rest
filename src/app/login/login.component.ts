import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform;
  constructor(private fb: FormBuilder, private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginform = this.fb.group({
      name : '',
      username : '',
      password : ''
    })
  }

  formSubmit(formdata){
    console.log(formdata);

    this.userservice.getUserByUsername(formdata.username).subscribe(data => {
      console.log(data);

      if(data){
        if(data['password'] == formdata['password']){
          console.log('login success!!');
          this.userservice.loggedin = true;


          // sessionStorage.setItem('username', formdata.username);
          sessionStorage.setItem('user', JSON.stringify(data));

          // Swal.fire({
          //   icon : 'success',
          //   title : 'Success',
          //   text : 'Successfully logged in !!'
          // })

          this.router.navigate(['/mnguser']);
        }
      }

    })
  }

}
