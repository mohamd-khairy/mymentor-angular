import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Globals } from 'src/app/globals';
import { NgForm } from '@angular/forms';
import { ChatServiceService } from './chat-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  public msgg;
  public chats;

  constructor(public globals: Globals, private chatService: ChatServiceService) { }

  ngOnInit() {
    this.scrollToBottom();
    this.getChats();

  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }




  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  sendMsg(formData: NgForm) {
    const newData = Object.assign({}, formData.value, {
      chat_id: this.globals.chatId
    });

    this.chatService.sendMsg(newData).subscribe(
      (data) => {
        this.msgg = JSON.parse(JSON.stringify(data)).data;
        this.globals.chatMessages.push(this.msgg);
        console.log(this.globals.chatMessages);
        formData.reset();
      }
    )
  }

  getChats() {

    this.chatService.getChats(this.globals.userData.user_type.user_type_name, this.globals.userData.id).subscribe(
      (data) => {
        this.chats = JSON.parse(JSON.stringify(data)).data;
        console.log(this.chats);
      }
    )
  }

}
