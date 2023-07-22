'use client'
import {FC,useState ,useEffect} from 'react';
import axios ,{ AxiosError, AxiosResponse }  from 'axios';
import './Dashboard.css'
import {Cars} from "./Cars/page"
import {Client} from "./Client/page"
import {Seller} from './Seller/page'


type Props={}



export interface CarsProps {
  cloums :any ,
  rows:any
  }

    
    

const Dashboard :FC=(props:Props) =>{

  const [newCar, setNewCar] = useState<NewCarsData[] >([] )
  const [refetch,setReftch]=useState<boolean |false >(false)
  const [dataClient,setDataClient]=useState<ClientData[]>([])
  const [dataSeller,setDataSeller]=useState<SellerData[]>([])
useEffect(()=>{

selectAllNew()
selectAllClient()


},[refetch])
console.log (newCar)
console.log(dataClient)


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

const updateNewcar=(id:NewCarsData,price:NewCarsData)=>{
   
  axios.put(`http://localhost:5000/newcars/update/${id}`,{
       price:price
       })
     .then((response:AxiosResponse)=>{setReftch(!refetch)})
     .catch((err:AxiosError)=>{console.log(err)})
  
  }

// client 

const selectAllClient = () => {
  axios
       .get("http://localhost:5000/client/")
       .then((res:AxiosResponse) => { setDataClient(res.data), console.log(res) })
       .catch((error:AxiosError) => { console.log(error) })

}
const deleteClient=(id:number)=>{
  axios
.delete(`http://localhost:5000/client/delete/${id}`)
.then((response:AxiosResponse)=>{setReftch(!refetch)})
.catch((err:AxiosError)=>{console.log(err);})
}


// 
const updateRole=(username:ClientData,role:ClientData)=>{
   
  axios.put(`http://localhost:5000/client/update/${username}`,{
       role:role
       })
     .then((response:AxiosResponse)=>{setReftch(!refetch)})
     .catch((err:AxiosError)=>{console.log(err)})
  
  }


// Seller 
const selectAllSeller= () => {
  axios
       .get("http://localhost:5000/seller/")
       .then((res:AxiosResponse) => { setDataClient(res.data), console.log(res) })
       .catch((error:AxiosError) => { console.log(error) })

}
const deleteSeller=(id:number)=>{
  axios
.delete(`http://localhost:5000/seller/delete/${id}`)
.then((response:AxiosResponse)=>{setReftch(!refetch)})
.catch((err:AxiosError)=>{console.log(err);})
}


// 
const updateSellerRole=(username:SellerData,role:SellerData)=>{
   
  axios.put(`http://localhost:5000/seller/update/${username}`,{
       role:role
       })
     .then((response:AxiosResponse)=>{setReftch(!refetch)})
     .catch((err:AxiosError)=>{console.log(err)})
  
  }







  return (


    <div>
 

      <div className="admin-dashboard">
      <div className="admin-dashboard-home"/>
      <div className="top-market-statistics">Welcome To BMW Statistique </div>

      {newCar.map((el:NewCarsData,i:number)=> <Cars  el={el} key={i} data ={newCar } delete={deleteNewCar} update={updateNewcar} />)}  


  
        </div>
        
        </div>



  )
  }
  export default Dashboard