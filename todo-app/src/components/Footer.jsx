import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterHolder>
      <h3>CopyRight &copy 2020</h3>
    </FooterHolder>
  );
}

const FooterHolder = styled.span`
  position: absolute;
  text-align: center;
  bottom: 10px;
  width: 100%;
  height: 2.5rem;

  h3 {
    color: #7b7d7d;
    font-family: "Lato";
  }
`;

export default Footer;
