const cloudinary = require("../database/cloudinary");
const {sequelize,db}= require("../database");
const {ACCESS_TOKEN_SECRET}=require("./jwtConfig")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const keygen = require('keygen');
const { sendConfirmation } = require("./nodemailerConfig");

module.exports={
//! find specific admin on login 
getOne: async (req,res)=>{
  const {username,password}=req.body
  try{
      const user= await db.Seller.findOne({where:{username:username}})
      if(!user){
          res.status(404).json("user not found") 
      }else{
         bcrypt.compare(password,user.dataValues.password,(err,result)=>{
          if(result){
            if(!user.dataValues.isActive){
              res.status(500).send("Please check your email inbox to verify your account")
            }else{
              const token = jwt.sign({
                username:user.dataValues.username,
                password:user.dataValues.password,
                role:user.dataValues.role,
                profilepic:user.dataValues.profilepic
            },ACCESS_TOKEN_SECRET)
            res.status(201).send(token)
            }
             
          }else{
              res.send("Wrong password")                
          }
         })
      }
  }
  catch(err){
      console.log("err",err);
      res.status(500).send(err)
  }
},


UpdateSeller : async(req,res)=>{
  const { id } = req.params;
  let {
    firstname,
    lastname,
    profilepic,  
    coverpic
  } = req.body;
    
  console.log(req.body)
  try{
    const sellerProfile= await db.Seller.findByPk(id)
    if (!sellerProfile) {
      return res.status(404).json({ error: "User profile not found" });
    } 


    console.log(firstname , lastname )
    sellerProfile.profilepic=profilepic;
    sellerProfile.coverpic=coverpic;
    sellerProfile.firstname=firstname;
    sellerProfile.lastname=lastname


  await sellerProfile.save();
  res.json(sellerProfile);
    
  }
  catch(error){
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
},


//!signUp
Add: async (req, res) => {
  const { firstname, lastname, username, email, password,isActive, profilepic, role, phoneNumber, coverpic } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  const acCode= keygen.url(keygen.large)
  try {
    const user = await db.Seller.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      isActive,
      activationCode:acCode,
      profilepic,
      role,
      phoneNumber,
      coverpic,
    })
    res.status(201).json(user)
    sendConfirmation(email,acCode)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
},
//!get one user data
getOneUser: async (req,res)=>{
  const {username}=req.body
  try{
      const user= await db.Seller.findOne({where:{username:username}})
      res.status(200).json(user)
    }
    catch(err){
      res.status(500).json(err)
    }
},

//! read all seller
getAllSeller: async (req, res) => {
    try {
      const sellers = await db.Seller.findAll();
      res.json(sellers);
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
// delete client 
deleteSeller:async(req,res)=>{
const {id}=req.params;
try{
 await db.Seller.destroy({ where: { id } });
 res.status(201).json({ message: "Seller is  deleted successfully" });
}
  catch(error){
   console.log(error)
   res.status(500).json({error:"error"})
}
},

updateSellerRole: async (req, res) => {

  const {username}=req.params
   const {role} = req.body
   try {
     const seller= await db.Seller.findOne({where: {username}})
     if (!seller) {
       return res.status(404).json("user not found")
     }
     await seller.update (req.body);
     
   

     res.status(200).json(seller)
   } catch (err) {
     console.log("err", err)
     res.status(500).json(err)
   }
 },

verifyUser: async (req,res)=>{
  try{ 
  const user= await db.Seller.findOne({where:{activationCode:req.params.activationCode}})
  if(!user){
    res.send("Activation code is wrong")
  }else{
    await user.update({
      isActive:true
      
    })
    res.send("Account activated successfully")
  }
}
catch(err){
  console.log("err", err)
  res.status(500).json(err)
}
}

}

