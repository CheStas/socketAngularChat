const messagesRepository = require('../repositories/messagesRepository');

function messagesService() {}

messagesService.prototype.addItem = addItem;
messagesService.prototype.getChatMessages = getChatMessages;

function addItem(data, callback) {
    data.time = Date.now();

    messagesRepository.add(data, (err, res) => {
        callback(err, res);
    });
}

function getChatMessages(id1, id2, callback) {
    messagesRepository.getChatMessages(id1, id2, (err, data) => {
        callback(err, data);
    })
}

module.exports = new messagesService();
