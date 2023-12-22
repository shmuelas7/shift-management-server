const express = require("express");
const router = express.Router();
const gardListController = require("../DL/controller/gardListController");


async function checkAvailable(data) {
    const list = await gardListController.read();
    for (const element of list) {
        if (element.day === data.day) {
            if (!(element.startHour <= data.startHour && element.startHour <= data.endHour)
                || !(element.endHour >= data.startHour && element.endHour >= data.endHour))
                return false;
        }
    }
    return true;
}
async function getListGard() {
    const data = await gardListController.read();
    console.log("data", data);
    return data;
}

async function addGard(data) {
    console.log(data);
    try {
        const res = await gardListController.create(data);
        return res;
    }
    catch {
        throw { code: 400, message: "not fOUNDnd" };
    }
}


async function delGard(userID) {

    const res = await gardListController.del(id);
    return res;
}



//TODO:
async function deleteDay(day) {

    const res = await gardListController.del(id);
    return res;
}


module.exports = { getListGard, addGard, delGard };