const express = require("express");
const router = express.Router();

const usersRouter = require("./userRoute");
const gardListRouter = require("./gardListRoute");

router.use("/users", usersRouter);
router.use("/gardList", gardListRouter);

module.exports = router;