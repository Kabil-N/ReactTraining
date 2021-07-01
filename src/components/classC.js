import React, { Component, useContext } from 'react'
import { mycontext } from './context'
export default function ClassC() {
        const {name}=useContext(mycontext)
        return (
            <div>
                {name}
            </div>
        )
    }

