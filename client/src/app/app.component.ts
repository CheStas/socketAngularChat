import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { User } from './models/user';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  users: User[];
  selectedChat: User;
  messages: Message[];
  constructor(
    public appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getUsers().subscribe(users => {
      this.users = users;
    })

    this.appService.getMessageNotification().subscribe((msg: Message) => {
      if(this.selectedChat && (this.selectedChat.id === msg.idTo || this.selectedChat.id === msg.idFrom)) {
        this.messages.push(msg);
      } else {
        this.users = this.markNewMsgNotification(this.users, msg.idFrom);
      }
    })

    this.appService.getMessages().subscribe(msgs => {
      this.messages = msgs;
    })
  }

  ngOnDestroy() {
    this.appService.disconnect();
  }

  sendMessage(msg: string): void {
    this.appService.sendMessage(msg, this.selectedChat.id)
  }

  onSelectChat(user: User): void {
    user.newMsg = 0;
    this.appService.requestToGetMessages(user.id);
    this.selectedChat = user;
  }

  markNewMsgNotification(users: User[], idFrom: string): User[] {
    users.some(el => {
      if (el.id === idFrom) {
        el.newMsg ? el.newMsg++ : el.newMsg = 1;
        return true;
      }
    })
    return users;
  }
}
