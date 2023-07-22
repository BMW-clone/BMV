// "use client"

// import React, { FC, useState } from 'react'
// import axios, { AxiosError, AxiosResponse } from 'axios'
// const payment: FC = () => {
//     const [amount, setAmount] = useState<string>("")
//     const handleCheckout = () => {
//         axios.post("http://localhost:5000/flouci/payment", { amount: Number(amount) })
//             .then((res: AxiosResponse) => {
//                 const { result } = res.data
//                 console.log(result);

//                 window.location.replace(result.link)
//             })
//             .catch((err: AxiosError) => console.log(err))

//     }
//     return (
//         <div>
//             <center>
//                 <input type="text" onChange={(e) => setAmount(e.target.value)} />
//                 <button onClick={handleCheckout}>Checkout</button>
//             </center>

//         </div>
//     )
// }

// export default payment