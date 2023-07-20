"use client"
import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios, { AxiosError, AxiosResponse } from 'axios'

export const activationcode: string = window.location.pathname


const activationCode: FC = () => {
    const router = useRouter()
    useEffect(() => {
        axios
            .post(`http://localhost:5000/client/verify/${activationcode.substring(9)}`)
            .then((res: AxiosResponse) => console.log(res))
            .catch((err: AxiosError) => console.log(err))
    }, [])

    return (
        <div>Your Account is now Activated, proceed to go the login page
            <button onClick={() => router.push("/")} >Login</button>
        </div>

    )
}

export default activationCode