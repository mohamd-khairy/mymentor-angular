import { Component } from '@angular/core';
import { MessagingService } from './messaging.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mymentor';

  show;
  constructor(private messagingService: MessagingService) { }
  ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.show = this.messagingService.currentMessage
  }
}
