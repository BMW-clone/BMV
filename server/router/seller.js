const router = require('express').Router();
const seller= require('../controller/seller')

//! login
router.post("/login",seller.getOne)
//!signup 
router.post("/signup",seller.Add)
//! get one user data
router.post("/findOne",seller.getOneUser)
//!get all seller
router.get('/',seller.getAllSeller)
//!delete seller
router.delete('/delete/:id',seller.deleteSeller)
//!update seller
router.put('/update/:id' ,seller.UpdateSeller)
//! verify emial
router.post("/verify/:activationCode",seller.verifyUser)    

// update role

router.put('/update/:username' ,seller.updateSellerRole)
module.exports=router