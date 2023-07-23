// //  //! SellerProfile Details
 
// interface Props  {
//     id:Number | null
//     firstname:string
//     lastname: string
//     username:string
//     email:string
//     password:Number
//     profilepic:string
//     role:string
//     phoneNumber:Number
//     coverpic:string
// }




//! usedCars Details
interface Cars {
id: Number 
brand :string
price :Number
category : CarCategory
color : string
year : Number
image : string
mileage : string
model :string
transmition : CarTransmition
hp :Number
carburant :CarCarburant
onStock:onStock
}

enum CarCategory {
SUV ="SUV",
COUPE ="COUPE",
SEDAN="SEDAN",
CABRIOLET="CABRIOLET"
}

enum CarTransmition {
MANUAL ="MANUAL",
AUTOMATIC ="AUTOMATIC"
}

enum CarCarburant {
ESSENCE="ESSENCE",
DIESEL="DIESEL"
}

enum onStock{
    available="available",
    sold="sold"
}


// const CarsData : Cars[]
// type data = Props[] 