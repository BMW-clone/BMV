
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