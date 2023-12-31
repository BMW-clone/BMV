  import React from 'react'
  import './cart.css'


  interface Car {
      id:number;
      brand:string;
      price:number;
      category:string;
      color:string;
      year:number;
      image:string;
      mileage:number;
      model:string;
      transmission:string;
      hp:number;
      carburant:string;
      rate:number;
  }
  interface CartProps{
      cartItems:Car[],
      onRemoveFromCart: (id: number) => void
  }


  const cart: React.FC<CartProps>=({cartItems,onRemoveFromCart})=>{
    const calculateTotalPrice = (): number => {
      let total = 0
      cartItems.forEach((car) => {
          total += car.price
      })
      return total
  }
      return (
          <div className="shopping-cart">
            <h2>Shopping List!</h2>
            {cartItems.map((car)=>
            <div key={car.id} className='cart-item'>
              <img src={car.image} alt={car.brand}/>
              <div>
              <h3> Brand : {car.brand}</h3>
              <p>Category : {car.category}</p>
              <p>Year : {car.year}</p>
              <p>Color : {car.color}</p>
              <p>Carburant: {car.carburant}</p>
              <p>Horse Power: {car.hp}</p>
              <p>Mileage: {car.mileage}</p>
              <p>Model :{car.model}</p>
              <p>Rating :{car.rate}</p>
              <p>Transmission: {car.transmission}</p>
              <p>Only At: ${car.price}</p>
            </div>
            <div className="buttons">
            <button onClick={() => onRemoveFromCart(car.id)}>Remove</button>
            <button >Buy!</button>
          </div>
          </div>
            )}
            <div className="total-price">
                <p>Total Price: ${calculateTotalPrice()}</p>
            </div>
          </div>
      )
  }
    

  export default cart
