import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserItemComponent } from './components/users-list/user-item/user-item.component';
import { UserInfoComponent } from './components/chat/user-info/user-info.component';
import { MessageComponent } from './components/chat/message/message.component';
import { IsUserOnlinePipe } from './pipes/is-user-online.pipe';
import { FilterUserByNamePipe } from './pipes/filter-user-by-name.pipe';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    UsersListComponent,
    UserItemComponent,
    UserInfoComponent,
    MessageComponent,
    IsUserOnlinePipe,
    FilterUserByNamePipe,
    CutTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
