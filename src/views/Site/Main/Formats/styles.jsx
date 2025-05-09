import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
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
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 610px;
  margin: 0 32px;

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
    height: 200px;
  }

  .groups-number {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

  .groups-button {
    width: 200px;
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

// export const ListPlayers = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 400px;
//   height: 100%;
//   margin-left: 64px;

//   .player-list {
//     border: 2px solid black;
//   }

//   .player {
//     display: flex;
//     align-items: center;
//   }

//   .player-name {
//     padding: 8px;
//     font-weight: bold;
//   }
// `;

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
  width: 200px;
  height: 55px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  justify-content: center;
  align-items: center;
`;

// .remove-player {
//   background-color: red;
// }
//   .add-remove-players {
//   }

//   .player-list {
//     border: 2px solid black;
//     margin: 16px 0 24px 0;
//   }

//   .groups {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .rounds {
//     display: flex;
//     flex-direction: column;
//     margin-left: 16px;
//   }
// `;

// export const DoublesStyle = styled.div``;
