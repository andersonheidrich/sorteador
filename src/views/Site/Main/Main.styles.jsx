import styled from "styled-components";
import BGimg from "../../../images/logo.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90%;
  font-family: Raleway, sans-serif;
  color: #f1c615;
  background-color: black;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  background-image: url(${BGimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Title = styled.div`
  margin: 32px 0 16px 0;

  h1 {
    @media screen and (max-width: 768px) {
      font-size: 28px;
    }

    @media screen and (max-width: 425px) {
      font-size: 26px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px;
  padding: 16px 40px 0 40px;

  li {
    padding: 8px;
    font-weight: bold;
    font-size: 24px;

    @media screen and (max-width: 1024px) {
      font-size: 22px;
    }

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    @media screen and (max-width: 425px) {
      font-size: 18px;
    }
  }
`;
