import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../App";
import Files from "../../assets/Files-Icon-PNG-HD-Quality.png";

const ShowFilesContainer = styled("div")`
  .show-files {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 20px;
  }
  .file-box {
    width: 200px;
    height: 200px;
    padding: 10px;
    .file-name {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: rgb(75 139 244);
      border-radius: 20px;
      padding-bottom: 10px;
      color: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      img {
        cursor: pointer;
        width: 150px;
        height: 150px;
        width: 150px;
        height: 150px;
        background: azure;
        margin-top: 9px;
        padding: 10px;
        border-radius: 20px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      }
    }
    .file-name:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
`;
const ShowFiles = () => {
  const { filesList } = useContext(GlobalContext);
  console.log(filesList);
  return (
    <ShowFilesContainer>
      {filesList.length > 0 && (
        <>
          <h3 className="files">Files</h3>
          <div className="show-files">
            {filesList.map((file) => {
              console.log(file.lastModified);
              return (
                <>
                  <div className="file-box">
                    <div className="file-name">
                      <img src={file.data} alt="file" />
                      {/* <iframe src={file.data} className="iframe" /> */}
                      {file.name.length > 10
                        ? file.name.substring(0, 6) +
                          "..." +
                          file.name.substring(file.name.length - 8)
                        : file.name}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </ShowFilesContainer>
  );
};

export default ShowFiles;
