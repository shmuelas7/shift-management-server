const express = require("express");
const router = express.Router();

const userLogic = require("../BL/userLogic");
router.post("/login", async (req, res) => {
    try {
        console.log(req.body);
        const id = await userLogic.login(req.body);
        console.log(id);
        res.send(id);
    } catch (err) {
        res.status(err.code).send(err.message);
    }
});


router.get("/user", async (req, res) => {
    try {
        const user = await userLogic.get(req._id);
        res.send(user);
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;