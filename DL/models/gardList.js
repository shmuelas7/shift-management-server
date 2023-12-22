const mongoose = require("mongoose");
const { SchemaTypes } = mongoose;

const gardListSchema = new mongoose.Schema({
    userId: {
        type: SchemaTypes.ObjectId,
        ref: "user",
    },
    day: {
        type: Number,
        required: true,

    },
    startHour: {
        type: Number,
        required: true,
    },
    endHour: {
        type: Number,
        required: true,
    },

});

const gardListModel = mongoose.model("gardList", gardListSchema);
module.exports = { gardListModel };