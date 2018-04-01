import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { User } from './models/user';
import { Message } from './models/message';

@Injectable()
export class AppService {
  private socket = io();
  private currenUser: User;
  public currentId: string;

  public requestToGetMessages(id: string): void {
    this.socket.emit('getChatMessages', id);
  }

  public disconnect(): void {
    this.socket.emit('disconnect');
  }

  public sendMessage(msg: string, id: string): void {
    this.socket.emit('newMessage', msg, id, this.socket.id, this.currenUser.name);
  }

  public getUsers(): Observable<User[]> {
    return new Observable(observer => {
      this.socket.on('users', (users: Array<any>) => {
        this.currentId = this.socket.id;
        observer.next(this.markCurrentUser(users, this.socket.id));
      });
    })
  }

  public getMessages(): Observable<Message[]> {
    return new Observable(observer => {
      this.socket.on('messages', (messages: any) => {
        observer.next(messages);
      });
    })
  }

  public getMessageNotification(): Observable<Message> {
    return new Observable(observer => {
      this.socket.on('messageNotification', (message: any) => {
        observer.next(message);
      });
    })
  }

  private markCurrentUser(users: User[], id: string): User[] {
    users.some(el => {
      if (el.id === id) {
        el.currentUser = true;
        this.currenUser = el;
        return true;
      }
    })
    return users;
  }
}
