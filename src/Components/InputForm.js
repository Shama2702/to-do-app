import React, { Component } from 'react'

class InputForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             note: ''
        }
    }
    
    handleInputChange = (event) => {
        this.setState({
            note: event.target.value
        })
    }

    inputSubmit = (event) => {
        this.props.addNew(this.state.note);
        // this.props.addNew(this.state.note)

        this.setState({
            note: ''
        })
        
    }

    render() {
        return (
            <div>
            
            <textarea type="text" cols="50" rows="5" 
            value={this.state.note}
            onChange={this.handleInputChange}
            ></textarea>

            <br/>
            <button className="btn btn-primary addBtn"
            onClick={this.inputSubmit}
            >Add New</button>
            
        </div>
        )
    }
}

export default InputForm

