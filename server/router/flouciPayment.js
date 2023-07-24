const router = require('express').Router()
const flouci= require('../controller/flouciPayment')

//!generate payme
router.post("/payment",flouci.Add)
//!verify payment   
router.post("/payment/:id",flouci.Verify)

module.exports=router