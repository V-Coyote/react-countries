import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}


body{
  font-family: 'Roboto', sans-serif;
  background-color: #333333;
  color: white;
}

button{
  cursor: pointer;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;

  margin: 0 auto;
`;
