import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket;
  constructor() { 
    this.connectUser();
  }

  connectUser(){
    this.socket = io('http://localhost:3000');
  }

  sendData(data){
    this.socket.emit('get_that', data);
  }

  recData(){
    return Observable.create( (observer) => {
      this.socket.on('rec_that', (data) => {
        observer.next(data);
      })
    })
  }

}
