const express = require("express");
const router = express.Router();

const gardListLogic = require("../BL/gardListLogic");

router.get("/list", async (req, res) => {  //get all list gard

    try {
        const result = await gardListLogic.getListGard();
        res.send(result);
    } catch (err) {
        res.status(err.code).send(err.message);
    }
});

router.post("/addGard", async (req, res) => {//add gard to the data base
    try {
        const res = await gardListLogic.addGard(req.body);
        res.send(res);
    } catch (err) {
        res.status(err.code).send(err.message);
    }
});
router.post("/updateGard", async (req, res) => {// change gard  from data base
    try {
        const res = await gardListLogic.changeGard(req.body);
        res.send(res);
    } catch (err) {
        res.status(err.code).send(err.message);
    }
});
router.post("/deleteGard", async (req, res) => {// delete gard  from data base
    try {
        const res = await gardListLogic.delGard(req.body);
        res.send(res);
    } catch (err) {
        res.status(err.code).send(err.message);
    }
});

module.exports = router;