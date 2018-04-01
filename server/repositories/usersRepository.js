const Repository = require('./generalRepository'),
    Users = require('../schemas/usersSchema');

function UsersRepository() {
    Repository.prototype.constructor.call(this);
    this.model = Users;
}

UsersRepository.prototype = new Repository();
UsersRepository.prototype.setOffline = setOffline;
UsersRepository.prototype.getById = getById;

function setOffline(id, callback) {
    const query = this.model.findOneAndUpdate({id: id}, { $set: {isActive: false}}, {new: true});
    query.exec(callback);
}

function getById(id, callback) {
    const query = this.model.findOne({id: id});
    query.exec(callback);
}

module.exports = new UsersRepository();
