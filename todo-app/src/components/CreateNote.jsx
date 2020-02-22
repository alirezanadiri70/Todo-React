import React, { useState } from "react";
import styled from "styled-components";
function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target
    setNote(prevNote => {
      return {
        ...prevNote,
        [name] : value
      }
    })
  }

  function handleSubmit(event) {
   event.preventDefault()
   props.onAdd(note) 
   setNote({
     title: "",
     content: ""
   })
  
  }



  return (
    <Note>
      <input
        onChange={handleChange}
        value={note.title}
        name="title"
        type="text"
        placeholder="Title"
      />
      <textarea
        onChange={handleChange}
        value={note.content}
        name="content"
        type="text"
        placeholder="Your Note ..."
        row="6"
      />
      <button onClick={handleSubmit}>Add</button>
    </Note>
  );
}

const Note = styled.div`
  width: 600px;
  // height: 300px;
  color: black;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 20px 10px #cfd8dc;
  position: relative;
  left: 550px;
  top: 30px;
  padding: 10px;
  border-radius: 20px;

  input[type="text"] {
    width: 98%;
    border: none;
    padding: 5px 0px 10px 10px;
    outline: none;
    font-size: 1.2em;
    resize: none;
    font-family: "Simonetta";
  }
  textarea[type="text"] {
    width: 99%;
    font-family: "Simonetta";
    border: none;
    outline: none;
    font-size: 1.2em;
    height: 50px;
    padding: 5px 0px 10px 10px;
  }
  button {
    border: none;
    font-size: 1.2em;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: relative;
    left: 500px;
    top: 30px;
    background-color: #f5ba13;
    color: #fff;
  }
  button:focus {
    outline: 0
  }
`;

export default CreateNote;
