"use client"
import React, { FC } from 'react'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import "./fail.css"
import { useRouter } from 'next/navigation';


const Fail: FC = () => {
    const router = useRouter()
    return (<>
        <div className='overlay'></div>
        <div className='content-modal'>
            <div className="card-vd">
                <button className="dismiss-vd" type="button" onClick={() => router.push("/Home")}>×</button>
                <div className="header-vd">
                    <div className="image-vd">
                        <ClearRoundedIcon />
                    </div>
                    <div className="content-vd">
                        <span className="title-vd">Invalid Order</span>
                        <p className="message-vd">Please proceed to go back to home page and try again </p>
                    </div>
                    <div className="actions">
                        <button className="history-vd" type="button" onClick={() => router.push("/Home")}>Home</button>
                    </div>
                </div>
            </div>
        </div></>
    )
}


export default Fail