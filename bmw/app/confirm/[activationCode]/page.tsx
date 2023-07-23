"use client"
import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios, { AxiosError, AxiosResponse } from 'axios'
import "./confirm.css"

export const activationcode: string = window.location.pathname
console.log(activationcode);


const activationCode: FC = () => {
    const router = useRouter()
    useEffect(() => {
        axios
            .post(`http://localhost:5000/client/verify/${activationcode.substring(9)}`)
            .then((res: AxiosResponse) => {
                if (res.data === "Activation code is wrong") {
                    axios
                        .post(`http://localhost:5000/seller/verify/${activationcode.substring(9)}`)
                        .then((res: AxiosResponse) => console.log(res))
                        .catch((err) => console.log(err))
                }
            })
            .catch((err: AxiosError) => console.log(err))
    }, [])

    return (
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
                            <span className="title-vd">Email validated</span>
                            <p className="message-vd">You may proceed to go back to the login page</p>
                        </div>
                        <div className="actions">
                            <button className="history-vd" type="button" onClick={() => router.push("/")}>Login</button>
                        </div>
                    </div>
                </div>
            </div></>

    )
}

export default activationCode