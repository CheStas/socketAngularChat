const Repository = require('./generalRepository'),
    Messages = require('../schemas/messagesSchema');

function MessagesRepository() {
    Repository.prototype.constructor.call(this);
    this.model = Messages;
}

MessagesRepository.prototype = new Repository();
MessagesRepository.prototype.getChatMessages = getChatMessages;

function getChatMessages(id1, id2, callback) {
    const query = this.model.find({$or: [{idTo: id1, idFrom: id2}, {idTo: id2, idFrom: id1}] });
    query.exec(callback);
}

module.exports = new MessagesRepository();
