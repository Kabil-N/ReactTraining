import React, { Component, useContext } from 'react'
import { mycontext } from './context'
export default function ClassB() {
    
        const {name}=useContext(mycontext)
        return (
            <div>
                {/* <mycontext.Consumer>
                    {value=>value.name}
                </mycontext.Consumer> */}
                {name}
            </div>
        )
}
