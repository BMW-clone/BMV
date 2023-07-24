import React,{FC} from 'react'
import axios from 'axios'
import Update from './Update'
import "./Seller.css"

interface CarsDetails {
    data:Cars[]
    setTrigger: (value: boolean) => void
   
}


const UsedCarsDetails =(props: CarsDetails ) =>{


console.log("props",props.data)

  const del = (id: Number) => {
    props.setTrigger(true)
    axios
      .delete(`http://localhost:5000/usedcars/delete/${id}`)
      .then((res) => {
        console.log(res);
        props.setTrigger(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
     <div className="PostDetails" >
    {props.data?.map((ele:Cars, i) => {
      return (
        <div className="PostDetails-container"  key={i}>
          <div className="sellerImageCar" >
              <img className="pd-image"    style={{ width: "225px", height: "225px" }}  src={ele.image} alt={ele.brand} />
            </div>
          <div className="pd-container-wrap-info">
            <div>
            <h1 className="brand"> {ele.brand}</h1>
            </div>
              <div>
              <span className="spand-content">  category: {ele.category}        </span>
              </div>
              <div>
              <span className="spand-content">  color: {ele.color}        </span>
              </div>
              <div>
              <span className="spand-content">  price: {ele.price.toString()}              </span>
              </div>
              <div>
              <span className="spand-content">  year: {ele.year.toString()}                </span>
              </div>
              <div>
              <span className="spand-content">  mileage: {ele.mileage} KM         </span>
              </div>
              <div>
              <span className="spand-content">  model: {ele.model}              </span>
              </div>
              <div>
              <span className="spand-content">  transmition: {ele.transmition}  </span>
              </div>
              <div><span className="spand-content">  hp: {ele.hp.toString()}  </span>
              </div>
              <div>
              <span className="spand-content">  carburant: {ele.carburant}      </span>
              </div>
              <div>
              <span className="spand-content">  carburant: {ele.onStock}      </span>
              </div>
             <div>           
            <div >
              <button   className="del-button"  onClick={()=>del(ele.id)} > delete </button>
              <Update id={ele.id} setTrigger={props.setTrigger} />
            </div>
          </div>
        </div>
        </div>
      );
    })}
  </div>
  )
}

export default UsedCarsDetails