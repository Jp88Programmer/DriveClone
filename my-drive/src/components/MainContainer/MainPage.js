import React, { useContext } from "react";
import styled from "styled-components";
import RecentSection from "../ShowSection/RecentSection";
import ShowFiles from "../ShowSection/ShowFiles";
import ShowFolders from "../ShowSection/ShowFolders";
import { GlobalContext } from "../../App";

const MainContainer = styled("div")`
  width: 100%;
  padding: 20px;
  background: #fafaf1;
  border-radius: 20px;
  .activity-found{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    height: 100%;
  }
`;
const MainPage = () => {
  const { foldersArr, filesList } = useContext(GlobalContext);
  return (
    <MainContainer>
      {/* <RecentSection /> */}
      {foldersArr.length > 0 || filesList.length > 0 ? (
        <>
          <ShowFolders />
          <ShowFiles />
        </>
      ) : (
        <>
          <div className="activity-found">No Activity Found</div>
        </>
      )}
    </MainContainer>
  );
};

export default MainPage;
