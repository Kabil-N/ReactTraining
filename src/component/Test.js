import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props)

        this.state = {
            a:{
                id:1,
                value:100
            }
        }
    }
    inc(){
        this.setState(prevState => ({
            a:{
                ...prevState.a,
                value:200
            }
        }))
        console.log(this.state.a);
            
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.inc()}>Hello</button>
            </div>
        )
    }
}

export default Test
