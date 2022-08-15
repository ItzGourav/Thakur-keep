import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Note from './components/Note';

const App = ()=> {
  const [additem, setAddItem] = useState([]);

  const addNote = (note)=>{
    setAddItem((predata)=>{
      return [...predata, note]
    })
  }

  const onDelete = (id)=>{
    setAddItem((olddata)=>{
     return olddata.filter((currdata, index)=>{
        return index !== id;
      })
    })
  }


  return (
  <>
    <Header />
    <CreateNote passNote={addNote} />

    {additem.map((val, index)=>{
      return <Note 
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
      />

    })}
    </>
  );
}

export default App;
