import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 95px;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: #ff8c00; */
  font-family: Barlow, sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);

  span {
    margin-top: 4px;
    font-size: 20px;
    font-weight: bold;
    /* color: black; */
    color: #3b0a59;
    cursor: pointer;

    &:hover {
      /* color: #505050; */
      color: #6c14a3;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  width: 86%;
  justify-content: center;
  align-items: center;
`;

export const Home = styled.div`
  width: 180px;
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .menu-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
    margin: 0 8px 0 8px;
  }
`;
