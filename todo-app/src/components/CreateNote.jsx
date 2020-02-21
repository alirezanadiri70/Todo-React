import React from "react";
import styled from "styled-components";
function CreateNote() {
  return (
    <Note>
      <input type="text" placeholder="Title" />
      <textarea type="text"placeholder="Your Note ..." row="6"/>
      <button>Add</button>
    </Note>
  );
}

const Note = styled.div`
  width: 600px;
  // height: 300px;
  color: black;
  display: flex;
  flex-direction:column;
  box-shadow: 0px 10px 20px 10px #CFD8DC;
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
    font-size: 1.5em;
    resize: none;
    font-family: "Pacifico";
  }
  textarea[type="text"] {
    width:99%;
    font-family: "Pacifico";
    border :none;
    outline:none;
    font-size:1em;
    height: 50px
  }
  button {
    border: none;
    font-size: 1.2em;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: relative;
    left: 500px;
    top:30px;
    background-color: #f5ba13;
    color: #fff;

  }
`;

export default CreateNote;
