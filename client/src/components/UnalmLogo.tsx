import React from "react";
import Logo from "../assets/images/unalm_logo.png";
import styled from "styled-components";

const BaseLogo = styled.img`
  width: 89px;
  height: 100px;
`;

const UnalmLogo = () => <BaseLogo src={Logo} />;

export default UnalmLogo;
