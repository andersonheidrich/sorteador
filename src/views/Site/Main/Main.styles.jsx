import styled from "styled-components";
import BGimg from "./../../../images/background.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  font-family: Raleway, sans-serif;
  background-image: url(${BGimg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  color: #3b0a59;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.div`
  margin: 32px 0 16px 0;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 610px;
  margin: 0 32px;
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  li {
    padding: 8px;
    font-weight: bold;
  }

  ol {
    margin-left: 32px;
    margin-top: 8px;
  }
`;
