const { gardListModel } = require("../models/gardList");

async function create(data) {
    return await gardListModel.create(data);
}
async function read(filter, proj) {
    return await gardListModel.find(filter, proj);
}

async function update(filter, newData) {
    return await gardListModel.findOneAndUpdate(filter, newData, { new: true });
}
async function del(filter) {
    return await gardListModel.findOneAndDelete(filter);
}

module.exports = { create, read, update, del };