import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr 2fr;
  align-items: flex-end;
  column-gap: 16px;

  width: 100%;

  input {
    color: #fff;
  }
`;
