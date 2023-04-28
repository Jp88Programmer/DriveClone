import Header from "./components/Header/Header";
import "./App.css";
import MainContainer from "./components/MainContainer/MainContainer";
import { createContext, useState } from "react";
import NewFolderPopup from "./components/PopUp/NewFolderPopup";
import styled from "styled-components";
import UploadFilesFolder from "./components/PopUp/UploadFilesFolder";
const AppContainer = styled("div")`
  z-index: ${(p) => p.isOpen && "-1"};
  opacity: ${(p) => (p.isOpen ? 0.5 : 1)};
  position: relative;
`;
export const GlobalContext = createContext();

function App() {
  const [isOpenNewFolder, setIsOpenNewFolder] = useState(false);
  const [isOpenUpload, setIsOpenUpload] = useState(false);
  const [foldersArr, setFoldersArr] = useState([]);
  const [filesList,setFilesList] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        isOpenNewFolder,
        setIsOpenNewFolder,
        isOpenUpload,
        setIsOpenUpload,
        foldersArr,
        setFoldersArr,
        filesList,
        setFilesList,
      }}
    >
      {isOpenNewFolder ? <NewFolderPopup /> : <></>}
      {isOpenUpload ? <UploadFilesFolder /> : <></>}
      <AppContainer className="App" isOpen={isOpenNewFolder || isOpenUpload}>
        <Header />
        <MainContainer />
      </AppContainer>
    </GlobalContext.Provider>
  );
}

export default App;
