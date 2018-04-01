const express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    path = require('path'),
    mongooseConnection = require('./database/dbConnect').connection;
    sloganData = require('./mockedData/sloganData.json')
    messagesService = require('./services/messagesService'),
    commonService = require('./services/commonService'),
    usersService = require('./services/usersService');

http.listen(3000, ()=>{
  console.log('listening on :3000');
});

app.use(express.static(__dirname + '/../client/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

function sendRandomMessage(socket) {
    setTimeout(() => {
        const text = sloganData[commonService.getRandomInt(0, 999)].text;
        messagesService.addItem({text, name: 'Spam bot', idFrom: 'spamBot', idTo: socket.id}, (err, msg) => {
            if (err) throw new Error(err);
            socket.emit('messageNotification', msg);
            usersService.getById(socket.id, (err, user) => {
                if (err) throw new Error(err);
                if (user.isActive) {
                    sendRandomMessage(socket);
                }
            })
        })
    }, commonService.getRandomInt(10000, 120000))
}

io.on('connection', function(socket){

    usersService.addItem(socket.id, (err, data) => {
        if (err) throw new Error(err);
        usersService.getAllItems((err, res) => {
            if (err) throw new Error(err);
            io.emit('users', res);
        })
    });

    sendRandomMessage(socket);

    socket.on('disconnect', () => {
        usersService.setOffline(socket.id, (err, data) => {
            if (err) throw new Error(err);
            usersService.getAllItems((err, res) => {
                if (err) throw new Error(err);
                io.emit('users', res);
            })
        })
    })

    socket.on('getChatMessages', (id) => {
        messagesService.getChatMessages(id, socket.id, (err, data) => {
            if (err) throw new Error(err);
            socket.emit('messages', data);
        })
    })


    socket.on('newMessage', (text, idTo, idFrom, name) => {
        switch (idTo) {
            case 'echoBot':
                messagesService.addItem({text, idTo, idFrom, name}, (err, data) => {
                    if (err) throw new Error(err);
                    socket.emit('messageNotification', data);

                    messagesService.addItem({text, idFrom: idTo, idTo: idFrom, name: 'Echo bot'}, (err, data) => {
                        if (err) throw new Error(err);
                        socket.emit('messageNotification', data);
                    })
                })
                break;
            case 'reverseBot':
                messagesService.addItem({text, idTo, idFrom, name}, (err, data) => {
                    if (err) throw new Error(err);
                    socket.emit('messageNotification', data);
                })
                messagesService.addItem({text: commonService.reverseText(text), idFrom: idTo, idTo: idFrom, name: 'Reverse bot'}, (err, data) => {
                    if (err) throw new Error(err);
                    setTimeout(() => {
                        socket.emit('messageNotification', data)
                    }, 3000);
                })
                break;
            case 'ignoreBot':
            case 'spamBot':
                messagesService.addItem({text, idTo, idFrom, name}, (err, data) => {
                    if (err) throw new Error(err);
                    socket.emit('messageNotification', data);
                })
                break;
            default:
                messagesService.addItem({text, idTo, idFrom, name}, (err, data) => {
                    if (err) throw new Error(err);
                    socket.broadcast.to(idTo).emit('messageNotification', data);
                    socket.emit('messageNotification', data);
                })
        }
    })
});


// "id": "echoBot",
// "name": "Echo bot",
// "info": "Echo all your messages",
// "isActive": "true",
// "img": "https://robohash.org/nammaioresillum.png?size=150x150&set=set4"


// "id": "reverseBot",
//     "name": "Reverse bot",
//     "info": "Reverse and Echo all your messages",
//     "isActive": true,
//     "img": "https://robohash.org/etullamquam.bmp?size=150x150&set=set4"

//     "id": "spamBot",
//     "name": "Spam bot",
//     "info": "Send random message every 10-120seconds. Ignore all messages",
//     "isActive": true,
//     "img": "https://robohash.org/earumetprovident.bmp?size=150x150&set=set4"


//     "id": "ignoreBot",
//     "name": "Ignore bot",
//     "info": "Ignore all messages",
//     "isActive": true,
//     "img": "https://robohash.org/placeatliberoet.jpg?size=150x150&set=set4"