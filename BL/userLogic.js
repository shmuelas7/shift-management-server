const userController = require("../DL/controller/userController");

async function login(data) {
    console.log(data);
    const { firstName, lastName, phone } = data;

    if (!firstName || !lastName || !phone)
        throw { code: 400, message: "missing data" };
    const user = await userController.readOne({ phone: phone });
    console.log("🚀 ~ file: userLogic.js ~ line 8 ~ login ~ user", user);
    if (!user) {
        user = await userController.create(data);
        // if (user.firstName === firstName && user.lastName == lastName)
    }
    return user;
}



module.exports = { login };