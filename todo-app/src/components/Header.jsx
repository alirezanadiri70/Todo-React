import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderInfo>
      <Title>What's on your Todo List Today</Title>
    </HeaderInfo>
  );
}

const HeaderInfo = styled.div`
background-color: #f5ba13;
margin: auto -16px;
padding: 16px 32px;
box-shadow: 0 0 10px 0 #784212;

`;

const Title = styled.h1`
  font-family: "Pacifico";
  color: #FAE5D3;
  text-shadow: 5px 3px 10px #784212;
`;

export default Header;
