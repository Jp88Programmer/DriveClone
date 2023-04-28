import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../SideBar/Sidebar";
import MainPage from "./MainPage";

const MainSection = styled("div")`
  display: flex;
  width: 100%;
`;
const MainContainer = () => {
  return (
    <MainSection>
      <Sidebar />
      <MainPage />
    </MainSection>
  );
};

export default MainContainer;
