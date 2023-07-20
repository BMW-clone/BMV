"use client"
import React, { FC } from 'react'

type Props = {}

const page: FC = (props: Props) => {
    return (
        <div>
            <center>
                <h1>This page is static </h1>
                <br />
                <h2>Activation code is required in order to activate your account</h2>
                <br />
                <h2>You may proceed to go back to signup or login</h2>
            </center>

        </div>
    )
}

export default page