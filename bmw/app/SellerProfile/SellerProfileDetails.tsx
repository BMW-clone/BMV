import React,{FC} from 'react'
// import UpdateSellerProfile from './UpdateSellerProfile'
import "./Seller.css"
import UpdateSellerProfile from './UpdateSellerProfile'
import UsedCarsOneSeller from './UsedCarsOneSeller'


export interface DataSeller{
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

const SellerProfileDetails:FC <DataSeller> =({id,firstname,lastname,username,email,password,profilepic,role,phoneNumber,coverpic} ) => {
 
  console.log(id)
  return (
<div>
        <div>
          <div className="banners"  >
            <img className="coverImage" alt="hi" src= {coverpic} />
            <img className="profilePic" alt="hi" src={profilepic} />
            <div className="text1">
              <div className="name">{firstname } {lastname}</div>
             
            </div>
          </div>
          <div>
          </div>
          <div>
           <UpdateSellerProfile id={id}/>
          </div>
          <div>
      <UsedCarsOneSeller id= {id}/>
        </div>
     </div>
    </div>
  )
}


export default SellerProfileDetails