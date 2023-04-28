import React from "react";
import logo from "../../assets/google-drive-1.png";
import styled from "styled-components";
const LogoContainers = styled("div")`
  width: 70px;
  height: 70px;
  margin: 0px 10px;
  margin-right: 130px;
  display: flex;
  align-items: center;
  .logo {
    width: 50px;
    height: 50px;
  }
`;
const LogoContainer = () => {
  return (
    <LogoContainers>
      <img src={logo} alt="logo" className="logo" />
    </LogoContainers>
  );
};

export default LogoContainer;
