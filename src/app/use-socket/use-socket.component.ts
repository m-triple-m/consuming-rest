import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-use-socket',
  templateUrl: './use-socket.component.html',
  styleUrls: ['./use-socket.component.css']
})
export class UseSocketComponent implements OnInit {

  messages = [];
  constructor(private socket: SocketService) { }

  ngOnInit(): void {
    this.socket.recData().subscribe(data => {
      console.log(data);
      this.messages.push(data);
    })
  }

  sendMessage(msg){
    this.messages.push({message : msg, sent : true});
    this.socket.sendData({message : msg});
  }
}
