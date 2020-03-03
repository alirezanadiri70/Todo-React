import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

function Header() {
  return (
    <HeaderInfo>
      <Title>Notes</Title>
      <NavButtons>
      <Link to="/note">
          <button className="navButton">Notes</button>
        </Link>
        <Link to="/about">
          <button className="navButton">About</button>
        </Link>
        <Link to="/contact">
          <button className="navButton">Contact</button>
        </Link>
      </NavButtons>
    </HeaderInfo>
  );
}

const HeaderInfo = styled.div`
  background-color: #f5ba13;
  margin: auto -16px;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 #784212;
  display:flex;
  align-items:center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-family: "Pacifico";
  color: #fae5d3;
  text-shadow: 5px 3px 10px #784212;
  font-size: 3rem
`;
const NavButtons = styled.span`
  padding-top:10px;
`;

export default Header;
