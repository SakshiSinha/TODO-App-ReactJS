import React, { Component } from 'react';

class CompletedTodo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
   
    
    render() {
        return (
            <div>
                  {this.props.label}  
            <ul className='list-group'>
                {this.props.data.map(itemName =>(
                    <li className='list-group-item' key={itemName.id} style={{color:`${itemName.isDone?"green":"black"}`
                    }}>
                    {itemName.name}
                    </li>
                ))}
            </ul>
            </div>
        );
    }
}

export default CompletedTodo;