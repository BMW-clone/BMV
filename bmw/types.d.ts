   
 enum  Disel{
    ESSENCE="ESSENCE",
    DIESEL="DIESEL"
   
  }
enum  Transmission{
    ESSENCE="MANUAL",
    DIESEL="AUTOMATIC"
   
  }
  
 
 interface NewCarsData {
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