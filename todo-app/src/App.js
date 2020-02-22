import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      if (newNote.title && newNote.content) {
        return [...prevNotes, newNote]
      }
      return prevNotes
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      <NoteHolder>
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            content={noteItem.content}
            title={noteItem.title}
            onDelete={deleteNote}
          />
        ))}
      </NoteHolder>
      <Footer />
    </div>
  );
}

const NoteHolder = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 80px;
`;

export default App;
