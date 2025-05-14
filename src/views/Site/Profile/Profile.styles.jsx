import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 90%;
  align-items: center;
  justify-content: center;
  font-family: Raleway, sans-serif;
`;

export const Box = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// export const Title = styled.h2`
//   text-align: center;
//   margin-bottom: 1.5rem;
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   font-size: 1rem;
// `;

// export const Button = styled.button`
//   width: 100%;
//   padding: 0.75rem;
//   background-color: #28a745;
//   color: white;
//   font-weight: bold;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: #218838;
//   }
// `;

// export const Error = styled.p`
//   color: red;
//   margin-bottom: 1rem;
// `;

// export const Container = styled.div`
//   max-width: 500px;
//   margin: 4rem auto;
//   padding: 2rem;
//   border-radius: 12px;
//   background: #fff;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
// `;

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

export const Select = styled.select`
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
  background-color: #28a745;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

export const Error = styled.p`
  color: red;
  margin-bottom: 1rem;
`;
