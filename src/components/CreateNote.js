import React from 'react';
import { useState } from 'react';
import "../css/createnote.css";

const CreateNote = (props) => {
  const [Hide, setHide] = useState(false);
  
  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  const expantit = () => {
    setHide(true)
  };

  const contractIt = ()=>{
    setHide(false)
  }


  const InputHandle = (text) => {
    const { value, name } = text.target;

    setNote((predata) => {
      return {
        ...predata,
        [name]: value,
      }
    })
  };


  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: ""
    })
  };

  return (
    <>
      <div className='main_note' onDoubleClick={contractIt}>
        <div className="create_note">
          <form>


            <input
              type="text"
              name='title'
              value={note.title}
              onChange={InputHandle}
              placeholder="Enter Title of the note"
              onClick={expantit}
            />
            <br />

            <br />
            {Hide ?
              <textarea
                value={note.content}
                name="content"
                placeholder="Enter your Note"
                onChange={InputHandle}
                cols="100"
                rows="">
              </textarea> : null}
          </form>
          <button disabled={note.title.length === 0} onClick={addEvent}>
            +
          </button>
        </div>
      </div>
    </>
  )
}

export default CreateNote;
