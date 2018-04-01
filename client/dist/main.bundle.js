webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<chat\r\n    [selectedChat]=\"selectedChat\"\r\n    [messages]=\"messages\"\r\n    [currentId]=\"appService.currentId\"\r\n    (sendMessage)=\"sendMessage($event)\"\r\n></chat>\r\n<users-list\r\n    *ngIf=\"users\"\r\n    [users]=\"users\"\r\n    (selectChatEmit)=\"onSelectChat($event)\"\r\n></users-list>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getUsers().subscribe(function (users) {
            _this.users = users;
        });
        this.appService.getMessageNotification().subscribe(function (msg) {
            if (_this.selectedChat && (_this.selectedChat.id === msg.idTo || _this.selectedChat.id === msg.idFrom)) {
                _this.messages.push(msg);
            }
            else {
                _this.users = _this.markNewMsgNotification(_this.users, msg.idFrom);
            }
        });
        this.appService.getMessages().subscribe(function (msgs) {
            _this.messages = msgs;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.appService.disconnect();
    };
    AppComponent.prototype.sendMessage = function (msg) {
        this.appService.sendMessage(msg, this.selectedChat.id);
    };
    AppComponent.prototype.onSelectChat = function (user) {
        user.newMsg = 0;
        this.appService.requestToGetMessages(user.id);
        this.selectedChat = user;
    };
    AppComponent.prototype.markNewMsgNotification = function (users, idFrom) {
        users.some(function (el) {
            if (el.id === idFrom) {
                el.newMsg ? el.newMsg++ : el.newMsg = 1;
                return true;
            }
        });
        return users;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var chat_component_1 = __webpack_require__("./src/app/components/chat/chat.component.ts");
var users_list_component_1 = __webpack_require__("./src/app/components/users-list/users-list.component.ts");
var user_item_component_1 = __webpack_require__("./src/app/components/users-list/user-item/user-item.component.ts");
var user_info_component_1 = __webpack_require__("./src/app/components/chat/user-info/user-info.component.ts");
var message_component_1 = __webpack_require__("./src/app/components/chat/message/message.component.ts");
var is_user_online_pipe_1 = __webpack_require__("./src/app/pipes/is-user-online.pipe.ts");
var filter_user_by_name_pipe_1 = __webpack_require__("./src/app/pipes/filter-user-by-name.pipe.ts");
var cut_text_pipe_1 = __webpack_require__("./src/app/pipes/cut-text.pipe.ts");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                chat_component_1.ChatComponent,
                users_list_component_1.UsersListComponent,
                user_item_component_1.UserItemComponent,
                user_info_component_1.UserInfoComponent,
                message_component_1.MessageComponent,
                is_user_online_pipe_1.IsUserOnlinePipe,
                filter_user_by_name_pipe_1.FilterUserByNamePipe,
                cut_text_pipe_1.CutTextPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
            ],
            providers: [app_service_1.AppService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var io = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
var AppService = /** @class */ (function () {
    function AppService() {
        this.socket = io();
    }
    AppService.prototype.requestToGetMessages = function (id) {
        this.socket.emit('getChatMessages', id);
    };
    AppService.prototype.disconnect = function () {
        this.socket.emit('disconnect');
    };
    AppService.prototype.sendMessage = function (msg, id) {
        this.socket.emit('newMessage', msg, id, this.socket.id, this.currenUser.name);
    };
    AppService.prototype.getUsers = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on('users', function (users) {
                _this.currentId = _this.socket.id;
                observer.next(_this.markCurrentUser(users, _this.socket.id));
            });
        });
    };
    AppService.prototype.getMessages = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on('messages', function (messages) {
                observer.next(messages);
            });
        });
    };
    AppService.prototype.getMessageNotification = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on('messageNotification', function (message) {
                observer.next(message);
            });
        });
    };
    AppService.prototype.markCurrentUser = function (users, id) {
        var _this = this;
        users.some(function (el) {
            if (el.id === id) {
                el.currentUser = true;
                _this.currenUser = el;
                return true;
            }
        });
        return users;
    };
    AppService = __decorate([
        core_1.Injectable()
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;


/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedChat\">\n    <user-info [user]=\"selectedChat\"></user-info>\n    <div class=\"messages\" *ngIf=\"!selectedChat.currentUser\" #messageWrap [scrollTop]=\"messageWrap.scrollHeight\">\n        <message *ngFor=\"let msg of messages\" [msg]=\"msg\" [myId]=\"currentId\"></message>\n    </div>\n    <div class=\"sendWrap\" *ngIf=\"!selectedChat.currentUser\">\n        <input type=\"text\" (keyup.enter)=\"sendMessageEmit()\" placeholder=\"Start chatting!\" [(ngModel)]=\"textMessage\">\n        <button (click)=\"sendMessageEmit()\">Send message</button>\n    </div>\n</div>\n<h3 *ngIf=\"!selectedChat\" class=\"welcomMsg\">Select chat to begin</h3>"

/***/ }),

/***/ "./src/app/components/chat/chat.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-flex: 80%;\n      -ms-flex: 80%;\n          flex: 80%;\n  background-color: #d8dee6; }\n\n.messages {\n  width: 100%;\n  height: calc(100vh - 257px);\n  overflow-y: scroll;\n  padding-bottom: 10px; }\n\n.sendWrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 20px 10px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap; }\n\n.sendWrap input {\n    width: 80%;\n    padding: 10px;\n    border-radius: 5px;\n    border: 1px solid #dcdcdc; }\n\n.sendWrap button {\n    width: 20%;\n    margin-left: 10px;\n    padding: 10px;\n    border-radius: 5px;\n    border: 0;\n    background-color: #5e8ac7;\n    font-size: 13px;\n    font-weight: 700px;\n    color: #fff;\n    cursor: pointer; }\n\n.welcomMsg {\n  margin: 20px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.messages = [];
        this.sendMessage = new core_1.EventEmitter();
    }
    ChatComponent.prototype.sendMessageEmit = function () {
        this.textMessage = this.textMessage.trim();
        if (this.textMessage) {
            this.sendMessage.emit(this.textMessage);
            this.textMessage = '';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "selectedChat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ChatComponent.prototype, "messages", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ChatComponent.prototype, "currentId", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "sendMessage", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'chat',
            template: __webpack_require__("./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/components/chat/chat.component.scss")]
        })
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;


/***/ }),

/***/ "./src/app/components/chat/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"msg\" class=\"msg\" [ngClass]=\"{'myMsg': msg.idFrom === myId}\">\n  <div class=\"msg__title\">\n    <span class=\"title__name\">{{ msg.name }}</span>\n    <span class=\"title__time\">{{ msg.time | date }}</span>\n  </div>\n  <div class=\"msg__body\">\n    {{msg.text}}\n  </div>\n</div>\n<div *ngIf=\"msg.isMy\" class=\"msg__seenTime\">Seen 4.12pm</div>\n"

/***/ }),

/***/ "./src/app/components/chat/message/message.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap; }\n\n.msg {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 80%;\n  margin: 20px 20px 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-filter: drop-shadow(3px 6px 5px #464646);\n          filter: drop-shadow(3px 6px 5px #464646);\n  border-radius: 10px; }\n\n.info {\n  width: 100%;\n  text-align: center;\n  display: block;\n  color: #5986ab;\n  font-size: 14px; }\n\n.msg__title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: #c0cad7;\n  padding: 15px;\n  font-size: 14px;\n  border-radius: 10px 10px 0 0; }\n\n.msg__title .title__name {\n    color: #2a3546; }\n\n.msg__title .title__time {\n    color: #9da7b5; }\n\n.msg__body {\n  padding: 15px;\n  position: relative;\n  font-size: 14px;\n  border-radius: 0 0 10px 10px;\n  color: #4c4e53;\n  background-color: #f5f7fb; }\n\n.msg__body::before {\n    content: '';\n    display: block;\n    border-style: solid;\n    border-width: 10px 10px 10px 0;\n    border-color: transparent #f5f7fb transparent transparent;\n    position: absolute;\n    left: -10px; }\n\n.msg__seenTime {\n  font-size: 14px;\n  margin: 10px 40px 0;\n  color: #9da7b5;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  width: 80%;\n  margin: 10px 0 0; }\n\n.myMsg {\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n\n.myMsg .msg__title {\n    background-color: #e6cab2; }\n\n.myMsg .msg__title .title__name {\n      color: #643d20; }\n\n.myMsg .msg__title .title__time {\n      color: #b29e8e; }\n\n.myMsg .msg__body::before {\n    right: -10px;\n    left: unset;\n    border-width: 10px 0 10px 10px;\n    border-color: transparent transparent transparent #f5f7fb; }\n"

/***/ }),

/***/ "./src/app/components/chat/message/message.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "msg", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "myId", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'message',
            template: __webpack_require__("./src/app/components/chat/message/message.component.html"),
            styles: [__webpack_require__("./src/app/components/chat/message/message.component.scss")]
        })
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;


/***/ }),

/***/ "./src/app/components/chat/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"userInfoWrap\" *ngIf=\"user\">\n  <img src=\"{{user.img}}\" alt=\"{{user.name}}\">\n  <div class=\"nameWrap\">\n    <h2 class=\"name\">{{user.name}} <span *ngIf=\"user.currentUser\">(you)</span></h2>\n    <p class=\"info\">{{user.info}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/chat/user-info/user-info.component.scss":
/***/ (function(module, exports) {

module.exports = ".userInfoWrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap; }\n\nimg {\n  width: 180px;\n  height: 180px; }\n\n.nameWrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  padding: 20px 25px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  background-color: #c0c9d7; }\n\n.name {\n  margin-bottom: 15px;\n  font-size: 24px;\n  color: #363636; }\n\n.info {\n  font-size: 14px;\n  color: #3b434a; }\n"

/***/ }),

/***/ "./src/app/components/chat/user-info/user-info.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "user", void 0);
    UserInfoComponent = __decorate([
        core_1.Component({
            selector: 'user-info',
            template: __webpack_require__("./src/app/components/chat/user-info/user-info.component.html"),
            styles: [__webpack_require__("./src/app/components/chat/user-info/user-info.component.scss")]
        })
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;


/***/ }),

/***/ "./src/app/components/users-list/user-item/user-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'imgWrap': true, 'active': user.isActive}\">\n    <img src=\"{{user.img}}\" alt=\"{{user.name}}\">\n</div>\n<div class=\"nameWrap\">\n    <h2 class=\"name\">\n        {{user.name}}\n        <span *ngIf=\"user.currentUser\">(you)</span>\n        <span class=\"newMsg\" *ngIf=\"user.newMsg\">{{user.newMsg}}</span>\n    </h2>\n    <p class=\"info\">{{user.info | cutText : 40}}</p>\n</div>"

/***/ }),

/***/ "./src/app/components/users-list/user-item/user-item.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  margin-bottom: 10px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  cursor: pointer; }\n  :host:hover {\n    background-color: #f8f8f8; }\n  .imgWrap::after {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 45px;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 2px solid #7bd54e;\n  background-color: #fff; }\n  .imgWrap.active::after {\n  background-color: #7bd54e; }\n  img {\n  width: 60px;\n  height: 60px;\n  border-radius: 5px; }\n  .nameWrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .name {\n  font-size: 16px;\n  color: #363636; }\n  .info {\n  font-size: 14px;\n  color: #989898; }\n  .newMsg {\n  background-color: #f11414;\n  margin: 0 5px;\n  padding: 2px 7px;\n  border-radius: 50%;\n  font-size: 12px;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/components/users-list/user-item/user-item.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserItemComponent.prototype, "user", void 0);
    UserItemComponent = __decorate([
        core_1.Component({
            selector: 'user-item',
            template: __webpack_require__("./src/app/components/users-list/user-item/user-item.component.html"),
            styles: [__webpack_require__("./src/app/components/users-list/user-item/user-item.component.scss")]
        })
    ], UserItemComponent);
    return UserItemComponent;
}());
exports.UserItemComponent = UserItemComponent;


/***/ }),

/***/ "./src/app/components/users-list/users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs\">\n    <button [ngClass]=\"{'active': activeTab === 'online'}\" (click)=\"changeTab('online')\">Online</button>\n    <button [ngClass]=\"{'active': activeTab === 'all'}\" (click)=\"changeTab('all')\">All</button>\n</div>\n<div class=\"usersList\">\n    <user-item\n        *ngFor=\"let user of (users | isUserOnline : activeTab | filterUserByName : filterQuery)\"\n        [user]=\"user\"\n        (click)=\"onSelectChat(user)\"\n        >\n    </user-item>\n</div>\n<div class=\"search\">\n    <input type=\"text\" [(ngModel)]=\"filterQuery\" placeholder=\"Search..\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/users-list/users-list.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-flex: 20%;\n      -ms-flex: 20%;\n          flex: 20%; }\n\n.tabs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap; }\n\n.tabs button {\n    width: 50%;\n    border: 1px solid #dcdcdc;\n    color: #777;\n    background-color: #f8f8f8;\n    padding: 20px 0 10px;\n    font-size: 14px;\n    cursor: pointer;\n    outline-color: #777; }\n\n.tabs button.active {\n    background-color: #fff;\n    border-color: transparent; }\n\n.usersList {\n  height: calc(100vh - 127px);\n  overflow-y: scroll; }\n\n.search {\n  background-color: #fff;\n  margin: 15px; }\n\n.search input {\n    padding: 15px;\n    font-size: 14px;\n    border-radius: 5px;\n    border: 1px solid #dcdcdc;\n    width: 100%; }\n\n@media (max-width: 990px) {\n  :host {\n    -webkit-box-flex: 30%;\n        -ms-flex: 30%;\n            flex: 30%; } }\n"

/***/ }),

/***/ "./src/app/components/users-list/users-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var UsersListComponent = /** @class */ (function () {
    function UsersListComponent() {
        this.users = [];
        this.selectChatEmit = new core_1.EventEmitter();
        this.activeTab = 'online';
    }
    UsersListComponent.prototype.changeTab = function (tab) {
        this.activeTab = tab;
    };
    UsersListComponent.prototype.onSelectChat = function (user) {
        this.selectChatEmit.emit(user);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], UsersListComponent.prototype, "users", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UsersListComponent.prototype, "selectChatEmit", void 0);
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'users-list',
            template: __webpack_require__("./src/app/components/users-list/users-list.component.html"),
            styles: [__webpack_require__("./src/app/components/users-list/users-list.component.scss")]
        })
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;


/***/ }),

/***/ "./src/app/pipes/cut-text.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CutTextPipe = /** @class */ (function () {
    function CutTextPipe() {
    }
    CutTextPipe.prototype.transform = function (string, size) {
        if (string.length > size) {
            return string.substring(0, size) + '...';
        }
        return string;
    };
    CutTextPipe = __decorate([
        core_1.Pipe({
            name: 'cutText'
        })
    ], CutTextPipe);
    return CutTextPipe;
}());
exports.CutTextPipe = CutTextPipe;


/***/ }),

/***/ "./src/app/pipes/filter-user-by-name.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FilterUserByNamePipe = /** @class */ (function () {
    function FilterUserByNamePipe() {
    }
    FilterUserByNamePipe.prototype.transform = function (users, query) {
        if (query) {
            return users.filter(function (el) { return el.name.toLowerCase().includes(query.toLowerCase()); });
        }
        return users;
    };
    FilterUserByNamePipe = __decorate([
        core_1.Pipe({
            name: 'filterUserByName'
        })
    ], FilterUserByNamePipe);
    return FilterUserByNamePipe;
}());
exports.FilterUserByNamePipe = FilterUserByNamePipe;


/***/ }),

/***/ "./src/app/pipes/is-user-online.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var IsUserOnlinePipe = /** @class */ (function () {
    function IsUserOnlinePipe() {
    }
    IsUserOnlinePipe.prototype.transform = function (users, activeTab) {
        if (activeTab === 'online') {
            return users.filter(function (el) { return el.isActive; });
        }
        return users;
    };
    IsUserOnlinePipe = __decorate([
        core_1.Pipe({
            name: 'isUserOnline',
        })
    ], IsUserOnlinePipe);
    return IsUserOnlinePipe;
}());
exports.IsUserOnlinePipe = IsUserOnlinePipe;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map