import React, { Component } from 'react'
import { mycontext } from './context'
import ClassB from './classB';
import ClassC from './classC';
import ClassD from './classD';
export default class ClassA extends Component {
    render() {
        return (
            <div>
                <mycontext.Provider value={{name:"kab"}}>
                <ClassB />
                </mycontext.Provider>
                <ClassC />
                <ClassD />
            </div>
        )
    }
}
