import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 90%;
  align-items: center;
  justify-content: center;
  font-family: Raleway, sans-serif;
`;

export const Box = styled.div`
  background-color: #000000;
  color: #f1c615;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 0 4px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  /* background-color: #007bff; */
  background-color: #f1c615;
  color: #000000;
  /* color: white; */
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    /* background-color: #0056b3; */
    background-color: #b99811;
  }
`;

export const ToggleText = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  /* color: #007bff; */
  color: #f1c615;
  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;
