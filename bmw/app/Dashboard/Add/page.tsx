'use client'
import  React,{useState,useEffect} from 'react';
import './Add.css'
interface Props{
  add:NewCarsData,


}


 const Add=(props:Props)=>{

    const[brand,setBrand]=useState<string>("")
    const[model,setModel]=useState<string>("")
    const [price,setPrice]=useState<number>()
    const[image,setImage]=useState<string>("")
    const[category,setCategory]=useState<string>("")
    const[color,setColor]=useState<string>("")
    const[year,setYear]=useState<string>("")
    const [mileage,setMileage]=useState<string>("")
    const[transmition,setTransmition]=useState<string>("")
    const[carburant,setCarburant]=useState<string>("")
     
    const[hp,setHp]=useState<number>()
    const [refetch,setReftch]=useState<boolean |false >(false)




    


    
  return (
  <div>
<section id="add">
        <h1 className="mini_title">Add New Car </h1>
       
        <form action="">
            <label> Brand</label>
            <input type="text"  onChange={(e)=>{setBrand(e.target.value)}}/>
            <label> Model</label>
            <input type="text"  onChange={(e)=>{setModel(e.target.value)}} />
            <label>Category</label>
            <input type="text"  onChange={(e)=>{setCategory(e.target.value)}} />
            <label> Year</label>
            <input type="text" onChange={(e)=>{setYear(e.target.value)}}/>
            <label>Price</label>
            <input type="number"   onChange={(e)=>{setPrice(e.target.value)}} />
            <label>Color</label>
            <input type="text"   onChange={(e)=>{setColor(e.target.value)}} />
            <label>Car Power</label>
            <input type="number"   onChange={(e)=>{setHp(e.target.value)}} />
            <label>Carburant</label>
            <input type="text"   onChange={(e)=>{setCarburant(e.target.value)}} />
            <label>Mileage</label>
            <input type="string"   onChange={(e)=>{setMileage(e.target.value)}} />
            <label>Transmission</label>
            <input type="string"   onChange={(e)=>{setTransmition(e.target.value)}} />
            <label>Image</label>
            <input type="text"   onChange={(e)=>{setImage(e.target.value)}} />








       <input type="submit" value="Add A New Car"     onClick={()=>{props.add(brand,image,category,price, model,mileage,transmition,hp,carburant,year,color)}}/>
            
            </form>
       </section>

  </div>


  )



}
export default Add