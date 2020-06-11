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
  avatar;
  imgURL;

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
      confirm : '',
      age : ['', Validators.required],
    }, {validator : this.matchPassword('password', 'confirm')})
  }

  matchPassword(password, confirm){
    return (form) => {
      let control1 = form.controls[password];
      let control2 = form.controls[confirm];

      if(control1.value !== control2.value){
        control2.setErrors({match : true})
      }else{
        control2.setErrors(null);
      }
    }
  }

  formSubmit(formdata){

    if(this.userform.invalid){
      alert('form invalid');
      return;
    }

    formdata.avatar = this.avatar;
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


  uploadImage(event)
  {
    let files = event.target.files;
    if(files.length===0)
      return;
 
    var mimeType=files[0].type;
    if(mimeType.match(/image\/*/)==null)
    { 
      // Swal.fire("Images Only");
      return;
    }
    this.preview(event.target.files)
    let formData=new FormData();
    let selectedFile=files[0];

    this.avatar = selectedFile.name;

    formData.append('image',  selectedFile,  selectedFile.name);

    this.userservice.uploadImage(formData).subscribe(response=>{
      console.log(response);

    })

  }
 
  preview(files) {
 
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }

}
