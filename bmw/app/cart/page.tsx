"use client"
import React, { FC, useState } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'

interface Car {
  id: number;
  brand: string;
  price: number;
  category: string;
  color: string;
  year: number;
  image: string;
  mileage: number;
  model: string;
  transmission: string;
  hp: number;
  carburant: string;
  rate: number;
}
interface CartProps {
  cartItems: Car[],
  onRemoveFromCart: (id: number) => void
}



const cart: FC<CartProps> = ({ cartItems, onRemoveFromCart }) => {
  const [amount, setAmount] = useState<string>("7000") //!amount is 7000 just for testing. when you finish working change it to useState<string>("") and setAmount(Total) total mta3 l products lkol !!


  const handleCheckout = () => {
    axios.post("http://localhost:5000/flouci/payment", { amount: Number(amount) })
      .then((res: AxiosResponse) => {
        const { result } = res.data
        console.log(result);

        window.location.replace(result.link)
      })
      .catch((err: AxiosError) => console.log(err))
  }

  return (
    <div>
      <h2>Shopping List!</h2>
      {cartItems?.map((car) =>
        <div key={car.id} className='cart-item'>
          <img src={car.image} alt={car.brand} />
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
          </div>
        </div>
      )}

      <button onClick={handleCheckout}>Checkout</button>//! only change the button css the functionalities work
    </div>
  )
}


export default cart
