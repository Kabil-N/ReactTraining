import React, { Component } from 'react'
import { mycontext } from './context'

export default class ClassD extends Component {
    render() {
        return (
            <div>
                {this.context.name}
            </div>
        )
    }

}
ClassD.contextType=mycontext;
