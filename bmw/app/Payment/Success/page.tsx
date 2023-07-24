"use client"
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, FC, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import "./success.css"
import { useRouter } from 'next/navigation';

const payment: FC = () => {
    const [result, setResult] = useState("")
    const [details, setDetails] = useState("")
    const search = useSearchParams()
    const payment_id = search.get("payment_id")
    console.log("payment id", payment_id)

    useEffect(() => {
        axios.post(`http://localhost:5000/flouci/payment/${payment_id}`)
            .then((res: AxiosResponse) => {
                console.log(res.data);
                setResult(res.data.result.status)
                setDetails(res.data.result.details)
            })
            .catch((err) => console.log(err))
    }, [])
    const router = useRouter()
    return (
        <>
            {result === "SUCCESS" && (
                <>

                    <div className='overlay'></div>
                    <div className='content-modal'>
                        <div className="card-vd">
                            <button className="dismiss-vd" type="button" onClick={() => router.push("/Home")}>×</button>
                            <div className="header-vd">
                                <div className="image-vd">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </div>
                                <div className="content-vd">
                                    <span className="title-vd">Order validated</span>
                                    <p className="message-vd">Thank you for your purchase. You may proceed to go back to the home page</p>
                                    <span className="title-vd">Recipte</span>
                                    <p className="message-vd"><b>Name :</b> {details.name} </p>
                                    <p className="message-vd"><b>Order Number </b> {details.order_number} </p>
                                    <p className="message-vd"><b>Phone Number : </b> {details.phone_number} </p>
                                </div>
                                <div className="actions">
                                    <button className="history-vd" type="button" onClick={() => router.push("/Home")}>Home</button>
                                </div>
                            </div>
                        </div>
                    </div></>)}
        </>

    )
}

export default payment