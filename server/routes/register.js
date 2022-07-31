const express = require("express")
const router  = express.Router()

const registerControler = require("../controlers/registerControler/index")

router.post("/", registerControler.userRegister)

module.exports = router