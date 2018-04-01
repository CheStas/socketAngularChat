const usersRepository = require('../repositories/usersRepository'),
    namesData = require('../mockedData/namesData.json'),
    sloganData = require('../mockedData/sloganData.json'),
    commonService = require('./commonService');

function usersService() {}

usersService.prototype.getAllItems = getAllItems;
usersService.prototype.addItem = addItem;
usersService.prototype.setOffline = setOffline;
usersService.prototype.getById = getById;

function getAllItems(callback) {
    usersRepository.getAll((err, data) => {
        callback(err, data);
    })
}

function getById(id, callback) {
    usersRepository.getById(id, (err, data) => {
        callback(err, data);
    })
}

function addItem(id, callback) {
    const name = namesData[commonService.getRandomInt(0, 999)].name;
    const info = sloganData[commonService.getRandomInt(0, 999)].text;
    const img = `https://robohash.org/${id}.png?size=150x150`;

    usersRepository.add({id, name, info, img, isActive: true}, (err, data) => {
        callback(err, data);
    })
}

function setOffline(id, callback) {
    usersRepository.setOffline(id, (err, data) => {
        callback(err, data);
    })
}

module.exports = new usersService();
