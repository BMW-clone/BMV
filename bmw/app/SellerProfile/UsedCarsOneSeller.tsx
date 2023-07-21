import React , {FC, useEffect ,useState} from 'react'
import axios from 'axios'
import Post from './Post'
import UsedCarsDetails from './UsedCarsDetails'



type idSeller={
    id:Number | null
}

const UsedCarsOneSeller  = (props:idSeller ) => {
    const [data,setData]= useState <Cars[]> ([])

    console.log(props.id)
      useEffect(()=>{
        axios.get(`http://localhost:5000/usedcars/getall/${props.id}`)
        .then((res) => {
          
          setData(res?.data)
          console.log(res.data)
          
        })
        .catch((err) => {
          console.log(err);
        });
    }, [props.id])
console.log("data", data)
   return (
    <div>
       <div>
        <UsedCarsDetails  data={data}   />
      </div>
      <div>
      <Post  idSeller={props.id} />
    </div>
    </div>
  
  )
}

export default UsedCarsOneSeller