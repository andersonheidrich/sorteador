import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90%;
  align-items: center;
  justify-content: center;
  font-family: Raleway, sans-serif;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 425px) {
    font-size: 18px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #000000;
  color: #f1c615;
  padding: 24px;
  border-radius: 12px;
  width: 100%;
  max-width: 96%;
  height: 780px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  span {
    font-size: 18px;
  }

  @media screen and (max-width: 425px) {
    max-width: 400px;
  }

  @media screen and (max-width: 375px) {
    max-width: 350px;
  }

  @media screen and (max-width: 320px) {
    max-width: 305px;
  }
`;

export const Boxes = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30%;
  padding: 8px;
`;

export const AddSport = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4px;

  .add-button {
    height: 45px;
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 70%;
  padding: 8px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Card = styled.div`
  border: 1px solid #f1c615;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 20px;

  .sport {
    display: flex;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .category {
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 4px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 25%;
  padding: 12px;
  background-color: #f1c615;
  color: #000000;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #b99811;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 16px;
`;
