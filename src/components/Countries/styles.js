import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  align-items: center;
  justify-content: center;

  margin-top: 32px;
`;

export const ItemList = styled.li`
  display: grid;
  grid-template-rows: 40% 60%;

  justify-items: center;
  align-items: center;

  width: 100%;
  height: 236px;

  padding: 12px;
  color: black;
  background-color: #f6f6f6;

  border-radius: 6px;

  img {
    width: 112px;
    height: 64px;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;

  width: 100%;
  height: 100%;

  text-align: center;

  align-items: flex-start;

  label + label {
    margin-top: 8px;

    color: #222;
    font-size: 14px;
    font-weight: 700;
    text-transform: capitalize;
  }
`;
