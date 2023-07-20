'use client'
import {FC,useState ,useEffect} from 'react';
import axios ,{ AxiosError, AxiosResponse }  from 'axios';
import './Dashboard.css'
import {Cars} from "./Cars/page"




type Props={}



export interface CarsProps {
  cloums :any ,
  rows:any
  }

    
    

const Dashboard :FC=(props:Props) =>{

  const [newCar, setNewCar] = useState<NewCarsData[] >([] )
  const [refetch,setReftch]=useState<boolean |false >(false)
 const map1=new Map <NewCarsData,number>()
useEffect(()=>{

selectAllNew()


},[refetch])
console.log (newCar)



//get all new cars

  const selectAllNew = () => {
    axios
         .get("http://localhost:5000/newcars/")
         .then((res:AxiosResponse) => { setNewCar(res.data), console.log(res) })
         .catch((error:AxiosError) => { console.log(error) })

}
//delete Newcar
const deleteNewCar=(id:number)=>{
    axios
  .delete(`http://localhost:5000/newcars/delete/${id}`)
  .then((response:AxiosResponse)=>{setReftch(!refetch)})
  .catch((err:AxiosError)=>{console.log(err);})
}

const updateNewcar=(id:number,price:NewCarsData)=>{
   
  axios.put(`http://localhost:5000/newscars/update/${id}`,{
       price:price
       })
     .then((response:AxiosResponse)=>{setReftch(!refetch)})
     .catch((err:AxiosError)=>{console.log(err)})
  
  }






  return (

    

      <div className="admin-dashboard">
      <div className="admin-dashboard-home"/>
      <div className="top-market-statistics">Welcome To BMW Statistique </div>
      {/* <Cars  data ={newCar } /> */}
  {newCar.map((el:NewCarsData,i:number)=> <Cars  el={el} key={i} data ={newCar } delete={deleteNewCar} update={updateNewcar} />)} 
  

        </div>
      



  )
  }
  export default Dashboard