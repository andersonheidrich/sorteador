import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 95px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: Barlow, sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);

  span {
    font-size: 20px;
    font-weight: bold;

    @media screen and (max-width: 990px) {
      font-size: 18px;
    }

    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  width: 94%;
  justify-content: center;
  align-items: center;
`;

export const Home = styled.div`
  width: 180px;
`;

export const Logo = styled.div`
  margin-top: auto;
  margin-bottom: auto;

  img {
    width: 80px;
    max-width: 80px;
    cursor: pointer;

    @media screen and (max-width: 990px) {
      width: 70px;
    }

    @media screen and (max-width: 480px) {
      width: 60px;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .nav-menu {
    display: flex;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }
  }

  .menu-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    margin: 0 8px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 4px;
    padding: 4px;

    &:hover {
      color: #ed6104;
    }
  }

  .menu-sandwich {
    display: none;
  }

  @media screen and (max-width: 990px) {
    .menu-item {
      width: 100px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;

    .menu-item {
      display: none;
    }

    &.show {
      max-height: 100%;
      flex-direction: column;
      align-items: flex-end;
      background-color: #f5eedc;
      box-shadow: 1px 1px 3px rgba(128, 128, 128, 0.15);
      position: absolute;
      top: 0px;
      right: 0;
      width: 100%;
      padding: 10px;

      .menu-item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-bottom: 4px;
      }
    }

    .menu-sandwich {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-right: 16px;
    }

    .brand {
      width: 100%;
      height: 3px;
      background-color: black;
    }
  }
`;
