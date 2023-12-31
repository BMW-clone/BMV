const {DataTypes,Sequelize} = require("sequelize");
const sequelize = new Sequelize('bmw', 'yacine', 'yacine251203**', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});
const db = {};//! instance of sequlize
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Client = require("../database/model/client")(sequelize, DataTypes);
db.Seller=require("../database/model/seller")(sequelize,DataTypes)
db.usedcars=require("../database/model/usedcars")(sequelize,DataTypes);
db.Admin = require("../database/model/admin")(sequelize, DataTypes);
db.NewCars = require("../database/model/newcars")(sequelize, DataTypes);
db.Rating = require("../database/model/rating")(sequelize, DataTypes);
//!relations
//!seller can has many used cars(seller to used cars)
 db.Seller.hasMany(db.usedcars);
 db.usedcars.belongsTo(db.Seller);
//!admin can has many new cars(admin to new cars)
db.Admin.hasMany(db.NewCars)
db.NewCars.belongsTo(db.Admin,{
  onDelete: 'CASCADE',
  onUpdate: 'RESTRICT'
})
//!Rating
db.Rating.belongsTo(db.NewCars,{
  as: 'newCar',
  foreignKey: 'newCarId',
});
db.Rating.belongsTo(db.usedcars,{
  as: 'usedCar',
  foreignKey: 'usedCarId',
});
db.NewCars.hasMany(db.Rating, {
  as: 'ratings',
  foreignKey: 'newCarId',
});
db.usedcars.hasMany(db.Rating, {
  as: 'ratings',
  foreignKey: 'usedCarId',
});

  db.Client.hasMany(db.Rating, {
      as: 'ratings',
      foreignKey: 'clientId',
  });

sequelize.query("CREATE DATABASE IF NOT EXISTS BMW;") //! Create the database if it doesn't exist
  .then(() => {
  
  })
  .catch((error) => {
    console.error('Unable to create the database:', error);
    sequelize.close();
  });
  
module.exports = {sequelize,db}
