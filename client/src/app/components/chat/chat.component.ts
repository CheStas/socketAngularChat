import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { Message } from '../../models/message';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input() selectedChat: User;
  @Input() messages: Message[] = [];
  @Input() currentId: string;
  @Output() sendMessage = new EventEmitter();
  textMessage: string;

  sendMessageEmit(): void {
    this.textMessage = this.textMessage.trim();
    if (this.textMessage) {
      this.sendMessage.emit(this.textMessage);
      this.textMessage = '';
    }
  }

}
