function Repository() {
}

Repository.prototype.add = add;
Repository.prototype.getAll = getAll;

function getAll(callback) {
    const query = this.model.find({});
    query.exec(callback);
}

function add(data, callback) {
    const model = this.model;
    const newItem = new model(data);
    newItem.save(callback);
}

module.exports = Repository;
