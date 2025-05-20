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
  margin: 32px 0 16px 0;
`;

export const Subtitle = styled.div`
  margin-bottom: 16px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  min-height: 610px;
  margin: 0 32px;

  @media screen and (max-width: 768px) {
    margin: 0 16px;
  }

  @media screen and (max-width: 425px) {
    width: 96%;
  }

  .player-list {
    border: 1px solid black;
    border-radius: 4px;
    overflow-y: auto;
    min-height: 474px;
    background-color: white;
  }

  .player {
    display: flex;
    align-items: center;
  }

  .player-name {
    padding: 4px 4px 4px 8px;
    font-weight: bold;
  }
`;

export const AddPlayersInput = styled.div`
  width: 100%;
  height: 474px;

  textarea {
    padding: 8px;
    width: 100%;
    resize: none;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid black;
  }
`;

export const Groups = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  justify-content: space-between;

  .groups-config {
    display: flex;
    flex-direction: column;
  }

  .groups-number {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
      font-size: 12px;
      width: 132px;
    }

    @media screen and (max-width: 768px) {
      font-size: 12px;
      width: 132px;
    }

    h3 {
      margin-bottom: 4px;
    }

    input {
      width: 100%;
      padding: 4px;
      border-radius: 4px;
      border: 1px solid black;
    }
  }

  .rounds-number {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8px;

    h3 {
      margin-bottom: 4px;
    }

    input {
      width: 100%;
      padding: 4px;
      border-radius: 4px;
      border: 1px solid black;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  display: flex;
  color: white;
  background-color: purple;
  padding: 8px;
  width: 180px;
  height: 55px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 132px;
  }
`;
