import React, { useContext, useState } from "react";
import styled from "styled-components";
import FolderIcon from "../../assets/mac-folder.png";
import { Button } from "../Common/Common";
import { GlobalContext } from "../../App";

const NewFolderPopupContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  .folder-container {
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    transition: all 0.1ms ease-in-out 0.1ms;
    background: #fafafa;
  }
  img {
    width: 200px;
    height: 200px;
  }
  .folder-input {
    display: flex;
    gap: 10px;
    padding: 10px 0px;
    input {
      width: 250px;
      font-size: 18px;
      height: 40px;
      border: none;
      border-bottom: 2px solid blue;
      padding: 2px 10px;
      outline: none;
    }
    button {
      padding: 7px 30px;
      border-radius: 10px;
    }
  }
`;
const NewFolderPopup = () => {
  const [inputVal, setInputVal] = useState("");
  const { setIsOpenNewFolder, setFoldersArr } = useContext(GlobalContext);
  return (
    <NewFolderPopupContainer>
      <div className="folder-container">
        <div className="folder-img">
          <img src={FolderIcon} alt="folder" />
        </div>
        <div className="folder-input">
          <input
            placeholder="Search a Files"
            className="input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <Button
            onClick={() => {
              setFoldersArr((p) => [...p, inputVal]);
              setIsOpenNewFolder(false);
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </NewFolderPopupContainer>
  );
};

export default NewFolderPopup;
