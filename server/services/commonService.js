function commonService() {}

commonService.prototype.getRandomInt = getRandomInt;
commonService.prototype.reverseText = reverseText;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reverseText(str) {
    return str.split('').reverse().join('');
}

module.exports = new commonService();
