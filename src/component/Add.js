import React, { Component } from 'react'
 
class Add extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemName : ''
        }
    }

     render() {
         return (
             <div>
                 <input className='ml-4 mb-3 mt-3' type='text'
                        value={this.state.itemName}
                        onChange={(e)=>this.setState({itemName:e.target.value})}    
                placeholder="please enter the todo item" ></input>      
                 <button className='btn btn-lg btn-success  text-center' onClick={()=>this.props.add(this.state.itemName)} style={{marginLeft:"110px"}}>Add</button>
             </div>
         )
     }
 }
 

export default Add