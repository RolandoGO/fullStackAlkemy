const express = require("express")
const router  = express.Router()
const operationsControler = require("../controlers/operationsControler/index")

router.get("/", operationsControler.getOperations )

router.post("/", operationsControler.createOperation)

router.delete("/", operationsControler.deleteOperation)

router.put("/", operationsControler.updateOperation)

module.exports = router