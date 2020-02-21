import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from 'styled-components'
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  return (
    <div>
      <Header />
      <CreateNote />
      <NoteHolder>
        <Note />
        <Note />
        <Note />
      </NoteHolder>
    </div>
  );
}

const NoteHolder = styled.div`
display: flex;
justify-content:flex-start;
padding-top: 80px
`;

export default App;
