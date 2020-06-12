import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-use-socket',
  templateUrl: './use-socket.component.html',
  styleUrls: ['./use-socket.component.css']
})
export class UseSocketComponent implements OnInit {

 
  constructor(private socket: SocketService) { }

  ngOnInit(): void {
    
  }
}
