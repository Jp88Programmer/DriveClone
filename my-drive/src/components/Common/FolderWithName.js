import React from "react";
import styled from "styled-components";
import FolderIcon from "../../assets/mac-folder.png";

const FolderWithNameContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
  }
  span {
    font-size: 14px;
    width: 100px;
    word-wrap: break-word;
    font-weight: 500;
    text-align: center;
  }
`;
const FolderWithName = ({ folderName }) => {
  return (
    <FolderWithNameContainer>
      <div>
        <img src={FolderIcon} alt="foldericon" />
      </div>
      <span>{folderName}</span>
    </FolderWithNameContainer>
  );
};

export default FolderWithName;
