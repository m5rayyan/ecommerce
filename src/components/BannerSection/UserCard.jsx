import React from "react";
import {
  StyledUserCard,
  StyledUserInfoBox,
  StyledGreeting,
  StyledUserImg,
  StyledUserAvatarBox,
} from "./BannerSection.style";

import { WightButton, StyledButton } from "../global/Button/Button.style";

import UserImg from "../../assets/Images/UserImg.png";
import { Link } from "react-router-dom";

function UserCard() {
  return (
    <StyledUserCard>
      <StyledUserInfoBox>
        <StyledUserAvatarBox>
          <StyledUserImg src={UserImg} alt="" />
        </StyledUserAvatarBox>
        <StyledGreeting>
          <p>Hi, user</p>
          <p>let’s get stated</p>
        </StyledGreeting>
      </StyledUserInfoBox>
      <Link to="/register">
        <StyledButton width="180">Join now</StyledButton>
      </Link>
      <WightButton as="a" href="#" width="180" variant="blue">
        Learn more
      </WightButton>
    </StyledUserCard>
  );
}

export default UserCard;
