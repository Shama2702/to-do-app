import React, { Component } from 'react'
import NoteView from './NoteView'

class NoteList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             notes: props.notes
        }
        
    }

    componentDidMount(){
        
    }
    
    render() {
        
        return (
            <div>
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th>Note List</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.notes.map((noteItem, index) => <NoteView key={index} noteItem = {noteItem} delete={this.props.delete}/>)}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default NoteList
