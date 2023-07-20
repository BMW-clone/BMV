const { db } = require("../database");
const cloudinary = require("../database/cloudinary");
const {ACCESS_TOKEN_SECRET}=require("./jwtConfig.js")
const jwt=require("jsonwebtoken");
const bcrypt = require("bcrypt");
const keygen = require('keygen');
const { sendConfirmation } = require("./nodemailerConfig");

module.exports={
    //! find specific user on login 
    getOne: async (req,res)=>{
        const {username,password}=req.body
        try{
            const user= await db.Client.findOne({where:{username:username}})
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
      //!get one user data
      getOneUser: async (req,res)=>{
        const {username}=req.body
        try{
            const user= await db.Client.findOne({where:{username:username}})
            res.status(200).json(user)
          }
          catch(err){
            res.status(500).json(err)
          }
      },
    
 
    //!signUp
    Add: async (req, res) => {
      const { firstname, lastname, username, email, password,isActive, profilepic, role, phoneNumber, coverpic } = req.body
      const hashedPassword = await bcrypt.hash(password, 10)
      const acCode= keygen.url(keygen.large)
      try {
        const user = await db.Client.create({
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
// read all client 
getAll: async (req, res) => {
  try {
    const clients = await db.Client.findAll()
    res.json(clients)
  } catch (err) {
    res.status(500).json(err)
  }
},

// delete client
deleteClient: async (req, res) => {
  const { id } = req.params
  try {
    await db.Client.destroy({ where: { id } })
    res.status(201).json("deleted")
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
},
    //! update client info 
    update: async (req, res) => {
      const {username, firstname, lastname, email, profilepic,  phoneNumber, coverpic } = req.body
      try {
        const user = await db.Client.findOne({where: {username: username}})
        if (!user) {
          return res.status(404).json("user not found")
        }
        await user.update({
          username,
          firstname,
          lastname,
          email,
          profilepic,
          phoneNumber,
          coverpic,
        })
  
        res.status(200).json(user)
      } catch (err) {
        console.log("err", err)
        res.status(500).json(err)
      }
    },
    verifyUser: async (req,res)=>{
      try{ 
      const user= await db.Client.findOne({where:{activationCode:req.params.activationCode}})
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
  };

