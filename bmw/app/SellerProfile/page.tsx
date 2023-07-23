"use client"
import React ,{FC,useEffect,useState} from 'react'
// import SellerProfileDetails from "./SellerProfileDetails"
// import UsedCarsOneSeller from './UsedCarsOneSeller'
import axios, { AxiosError, AxiosResponse } from 'axios'
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import "./Seller.css"
import UpdateSellerProfile from './UpdateSellerProfile';
import UsedCarsOneSeller from './UsedCarsOneSeller';


type Props={}



export interface sellerData  {
    id:Number | null
    firstname:string
    lastname: string
    username:string
    email:string
    password:Number
    profilepic:string
    role:string
    phoneNumber:Number
    coverpic:string
  }



const Page :FC= (props:Props) => {
  
    const [data,setData]=useState<sellerData>({} as sellerData)
    const [id,setId] = useState< number | null > (null)
    // const [id,setId] = useState(null)
    const [trigger,setTrigger] = useState<boolean | false>(false)

    interface Token {
      username: string,
      password: string,
     role: string,
     profilepic: string
     exp: number,
    }

    useEffect(()=>{
      userinfo()
    },[trigger])
  
     //!get user info from token
  const userinfo = () => {
    const cookie = new Cookies();
    const token:Token = jwtDecoder(cookie.get("jwt-token"));
    console.log("token",token.role==="Seller");
    if (token.role === "Seller") {
      console.log("seller")
      console.log("username",token.username)
      axios
        .post("http://localhost:5000/seller/findOne", {
          username: token.username,
        })
        
        .then((res:AxiosResponse  ) => {
          setData(res?.data);
          console.log(res.data)
          setId(res?.data.id)
        })
        .catch((err:AxiosError ) => console.log(err));
    }
  };

  console.log("data",data)


  return (
   
    <div>
      <div>
        <div>
          <div className="banners"  >
            <img className="coverImage" alt="hi" src= {data.coverpic} />
            <img className="profilePic" alt="hi" src={data.profilepic} />
            <div className="text1">
              <div className="name">{data.firstname } {data.lastname}</div>      
            </div>
          </div>
          <div>
          </div>
          <div>
           <UpdateSellerProfile id={id} setTrigger={setTrigger}/>
          </div>
        </div>
     
    </div>
        <div>
        <UsedCarsOneSeller id={id} />
        </div>

    </div>
  )
}
export default Page
