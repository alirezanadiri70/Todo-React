import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
      <FooterHolder>
        <h3>CopyRight &copy 2020</h3>
      </FooterHolder>    
  )
}

const FooterHolder = styled.span`
  width: 100%;
  height: 50px;
  position: relative;
  top: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFF3E0;
  
  h3{
    color: #7B7D7D;
    font-family: 'Lato' ;
  }
`;

export default Footer