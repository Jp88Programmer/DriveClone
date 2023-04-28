import React from 'react'
import styled from 'styled-components';
import LogoContainer from '../Logo/LogoContainer';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
const HeaderContainer = styled('div')`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

`
const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer />
      <Search />
      <Profile />
    </HeaderContainer>
  )
}

export default Header
