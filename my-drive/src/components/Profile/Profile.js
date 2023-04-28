import React from 'react'
import styled from 'styled-components'
import { UilUserCircle } from "@iconscout/react-unicons";
const ProfileContainer = styled("div")`
  margin-left: auto;
  margin-right: 20px;
  .user {
    width: 40px;
    height: 40px;
  }
`;
const Profile = () => {
  return (
    <ProfileContainer>
      <UilUserCircle className="user"/>
    </ProfileContainer>
  )
}

export default Profile
