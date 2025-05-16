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
  margin: 32px 0 48px 0;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  min-height: 610px;
  margin: 0 32px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 16px;
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

export const FormatButton = styled.button`
  width: 120px;
  height: 40px;
  border: 2px solid black;
  border-radius: 8px;
  cursor: pointer;
`;
