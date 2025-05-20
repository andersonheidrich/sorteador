import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90%;
  font-family: Raleway, sans-serif;
`;

export const Title = styled.div`
  margin: 32px 0 32px 0;

  h1 {
    @media screen and (max-width: 768px) {
      font-size: 28px;
    }

    @media screen and (max-width: 425px) {
      font-size: 18px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  min-height: 610px;
  margin: 0 16px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 16px;

  @media screen and (max-width: 425px) {
    padding: 8px;
    margin: 0 4px 12px 4px;
    width: 98%;
    min-height: 560px;
  }
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

    /* @media screen and (max-width: 1024px) {
      font-size: 14px;
    } */

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }

    @media screen and (max-width: 425px) {
      font-size: 12px;
    }
  }

  ol {
    margin-left: 32px;
    margin-top: 8px;
  }
`;

export const FormatButton = styled.button`
  width: 120px;
  height: 40px;
  border: 2px solid black;
  border-radius: 8px;
  cursor: pointer;
`;
