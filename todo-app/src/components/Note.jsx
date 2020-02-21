import React from 'react'
import styled from 'styled-components'

function Note() {
  return (
    <Notes>
      <p>This is title</p>
      <p>This is note</p>
      <button>Delete</button>
    </Notes>
  )
}
const Notes = styled.div`
  height: 150px;
  width: 200px;
  box-shadow: 0px 10px 20px 10px #CFD8DC;
  padding: 10px;
  margin-left: 20px;
  border-radius: 20px;

  button {
    position: relative
  }

`;


export default Note
