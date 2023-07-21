
const {DataTypes,sequelize} = require("sequelize");
module.exports=(sequelize,DataTypes)=>{
    const Client = sequelize.define("Client",{
        firstname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    isActive:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    },
    activationCode:{
        type:DataTypes.STRING,
    },
    profilepic:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:"client",
        allowNull:false,
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    coverpic:{
        type:DataTypes.STRING,
        allowNull:false,

    }
    )

    Client.associate = (models) => {
        Client.hasMany(models.Rating, {
            as: 'ratings',
            foreignKey: 'clientId',
        });
    };
    return Client

}