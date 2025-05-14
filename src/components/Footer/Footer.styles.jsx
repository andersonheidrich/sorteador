import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  align-items: center;
  /* color: black; */
  /* background-color: #ff8c00; */
  font-family: Barlow, sans-serif;
`;

export const SocialMedias = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 64px 64px 0 64px;

  a {
    display: flex;
  }

  span {
    font-weight: bold;
    font-size: 17px;
  }

  .media {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 240px;
  }

  .email-icon {
    width: 64px;
    height: 64px;
  }

  .media-icon {
    width: 64px;
    height: 64px;
    cursor: pointer;
  }
`;
