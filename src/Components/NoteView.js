import React, { Component } from 'react'

export class NoteView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    deleteItem = () => {
        this.props.delete(this.props.noteItem.id);
    }
    
    render() {
        return (
            <React.Fragment>
            <tr>
                <td>{this.props.noteItem.note}
                <button className="btn btn-primary ml-3"
                onClick={this.deleteItem}>Delete</button>
                </td>
            </tr>
        </React.Fragment>
        )
    }
}

export default NoteView
