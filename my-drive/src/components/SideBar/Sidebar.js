import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UilPlus } from "@iconscout/react-unicons";
import { Button } from "../Common/Common";
import { UilFolderPlus } from "@iconscout/react-unicons";
import { GlobalContext } from "../../App";
const SidebarContainer = styled("div")`
  width: 100%;
  background-color: #fafafa;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px;
  gap: 10px;

  .add-new {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .add-new-folder {
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
`;
const Sidebar = () => {
  const { setIsOpenNewFolder, setIsOpenUpload } = useContext(GlobalContext);
  return (
    <SidebarContainer>
      <Button
        className="add-new"
        onClick={() => {
          setIsOpenUpload(true);
        }}
      >
        <UilPlus />
        New
      </Button>
      <Button
        className="add-new-folder"
        onClick={() => {
          setIsOpenNewFolder(true);
        }}
      >
        <UilFolderPlus />
        New Folder
      </Button>
    </SidebarContainer>
  );
};

export default Sidebar;
