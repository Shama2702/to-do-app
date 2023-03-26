import React, { Component } from 'react'
import Title from './Title'
import './StyleSheet/style.css'
import { Container } from 'react-bootstrap'
import InputForm from './InputForm'
import NoteList from './NoteList'
//import config from '../config';
import * as firebase from 'firebase'

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             notes: []
        }
        this.addNew = this.addNew.bind(this)
        this.delete = this.delete.bind(this)
        
    }

    componentDidMount(){
        const myRef = firebase.database().ref().child('notes');
        myRef.on('child_added', snap =>{
            let newId = snap.child('id').val();
            let newNote = snap.child('note').val();
            this.getData(newId, newNote);
        });
    }


    getData(id, note){
        let prevNotes = this.state.notes;
        prevNotes.push({id, note});
        this.setState({
            notes: prevNotes
          });
    }

    addNew(noteParam){

        let myRef = firebase.database().ref().child('notes');
        const obj = myRef.push({
            //id: obj.key,
            note: noteParam
        });
        myRef.child(obj.key).child('id').set(obj.key);
        
    }

    delete(id){
        let myRef = firebase.database().ref().child('notes');
        myRef.child(id).remove();

        //console.log(id)
    }
    
    render() {
        return (
            <div>
                <Container>
                    <Title/>
                    <InputForm addNew={this.addNew} />
                    <NoteList notes = {this.state.notes} delete={this.delete}/>
                </Container>
            </div>
        )
    }
}

export default Main
