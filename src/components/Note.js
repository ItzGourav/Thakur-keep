import React from 'react';
import "../css/notes.css"

const Note = (props) => {

    const deleteNote = () =>{
        props.deleteItem(props.id);
    }

    return (
        <>
        <div className='maindiv'>
            <div className='created_notes'>
            <h1> {props.title}</h1>
            <br/>
            <hr style={{backgroundColor:'white' , width:"100%" , height:"1px"}}/>
            <p> {props.content} </p>
            <button onClick={deleteNote}> - </button>
            </div>
            </div>
        </>
    )
}

export default Note;
