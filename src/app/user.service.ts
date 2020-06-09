import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/user';
  loggedin = false;

  constructor(private http: HttpClient, private router: Router) { }

  addUser(data){
    return this.http.post(this.url+'/add', data);
  }

  getAllUsers(){
    return this.http.get(this.url+'/getall');
  }

  getUserByUsername(username){
    return this.http.get(this.url+'/getbyusername/'+username);
  }

  logout(){
    this.loggedin = false;
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  uploadImage(file){
    return this.http.post(this.url+'/addimg', file);
  }

  deleteUser(id){
    return this.http.delete(this.url+'/delete/'+id);
  }

  updateUser(id, data){
    return this.http.put(this.url+'/update/'+id, data);
  }

}
