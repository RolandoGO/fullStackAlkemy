const express = require("express")
const loginControler = require("../controlers/loginControler")
const router  = express.Router()

router.post("/", loginControler.isUserRegister)

module.exports = router