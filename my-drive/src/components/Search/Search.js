import React from "react";
import styled from "styled-components";
import { UilFileSearchAlt } from "@iconscout/react-unicons";
const SearchContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgb(216 227 244);
  padding: 10px 20px;
  border-radius: 30px;
  justify-content: space-between;
  width: 100%;
  max-width: 750px;
  height: 50px;
  .search-logo{
    width: 30px;
    height: 40px;
  }
  .input {
    background: transparent;
    outline: none;
    border: none;
    font-size: 24px;
    padding: 10px;
    width: 100%;
  }
  .input::placeholder{
    font-weight: 400;
    color: black;
  }
`;

const Search = () => {
  return (
    <SearchContainer>
      <UilFileSearchAlt className='search-logo'/>
      <input placeholder="Search a Files" className="input"/>
    </SearchContainer>
  );
};

export default Search;
