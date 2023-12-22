const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

const connect = () => {
    mongoose.connect(MONGO_URL)
        .then(console.log("Connection Success, State:", mongoose.connection.readyState))
        .catch(e => console.log("error mongoose: ", e));
};

module.exports = { connect };