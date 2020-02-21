import React from 'react'
import styled from 'styled-components'

function Note(props) {
  return (
    <Notes>
      <p>{props.title}</p>
      <p>{props.content}</p>
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
  font-family: 'Simonetta' ;

  button {
    position: relative;
    left: 150px;
    top: 40px;
    border-radius : 50%;
    height: 50px;
    width: 50px;
    display:flex;
    justify-content: center;
    align-item: center;
    background-color: #f5ba13;
    color: #fff;
    border: none;
    font-size: 1em
  }

`;


export default Note
