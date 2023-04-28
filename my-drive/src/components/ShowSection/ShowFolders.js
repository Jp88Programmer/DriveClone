import React, { useContext } from "react";
import styled from "styled-components";
import FolderWithName from "../Common/FolderWithName";
import { GlobalContext } from "../../App";

const ShowFolderContainer = styled("div")`
  .show-folder {
    display: grid;
    grid-template-columns: repeat(auto-fill, 120px);
    gap: 20px;
  }
`;
const ShowFolders = () => {
  const { foldersArr, setFoldersArr } = useContext(GlobalContext);
  return (
    <ShowFolderContainer>
      {foldersArr.length > 0 && (
        <>
          <h3 className="">Folders</h3>
          <div className="show-folder">
            {foldersArr.map((e, id) => {
              return <FolderWithName folderName={e} key={id} />;
            })}
          </div>
        </>
      )}
    </ShowFolderContainer>
  );
};

export default ShowFolders;
