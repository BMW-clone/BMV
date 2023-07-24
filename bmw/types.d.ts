

 enum  Disel{
    ESSENCE="ESSENCE",
    DIESEL="DIESEL"
   
  }
enum  Transmission{
    ESSENCE="MANUAL",
    DIESEL="AUTOMATIC"
   
  }
  
 
 interface NewCarsData {
     id:number,
    brand:string ,
    price:number,
    category:string ,
    color:string ,
    year:string ,
    image:string ,
    mileage:string ,
    model:string,
    transmition:Transmission ,
    hp:number,
    carburant:Disel,
    rate:number 

 }





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


interface ClientData{
  id:number,
   firstname:string,
   lastname:string,
   username:string,
   emailname:string,
   password:string,
   profilpic:string,
   role:string,
   phoneNumber:string,
   coverpic:string,

}



interface SellerData{
  id:number,
  firstname:string,
  lastname:string,
  usertname:string,
  emailname:string,
  password:string,
  profilpic:string,
  role:string,
  phoneNumber:string,
  coverpic:string,

}

