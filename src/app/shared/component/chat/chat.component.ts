import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Globals } from 'src/app/globals';
import { NgForm } from '@angular/forms';
import { ChatServiceService } from './chat-service.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  public msgg;
  public chats;
  public items: Observable<any[]>;
  private itemCollection: AngularFirestoreCollection;


  constructor(public db: AngularFirestore, public globals: Globals, private chatService: ChatServiceService) {

    this.itemCollection = this.db.collection('chats');

  }

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


    this.sendMsgbackend(formData)

    const newData = Object.assign({}, formData.value, {
      user_id: this.globals.userData.id,
      type: this.globals.userData.user_type.user_type_name,
      photo: this.globals.userData.profile.photo,
      name: this.globals.userData.name,
      created_at: moment(new Date()).format("YYYY/MM/DD hh:mm:ss"),
      chat_id: this.globals.chatId
    });

    this.itemCollection.add(newData);

    const noti = {
      id: Math.random().toString(36).substring(7),
      user_id: this.globals.chatUserdata.user.id,//formData.value.user_will_notify,
      from_user_id: this.globals.userData.id,
      type: 'chat',
      image: this.globals.userData.profile.photo,
      title: this.globals.userData.name + ' send message to you',
      body: formData.value.message,
      readed: false,
      created_at: moment(new Date()).format("YYYY/MM/DD hh:mm:ss"),
    };

    this.globals.add_notification(noti);
    formData.reset();
  }

  sendMsgbackend(formData: NgForm) {
    const newData = Object.assign({}, formData.value, {
      chat_id: this.globals.backendchatId
    });

    this.chatService.sendMsg(newData).subscribe(
      (data) => {
      }
    )
  }

  getChats() {

    if (this.globals.userData) {
      this.chatService.getChats(this.globals.userData.user_type.user_type_name, this.globals.userData.id).subscribe(
        (data) => {
          this.chats = JSON.parse(JSON.stringify(data)).data;
        }
      )
    }

  }

}
