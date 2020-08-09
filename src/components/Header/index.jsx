import React from 'react';

import { Container } from './styles';

import { formatNumber } from '../../helpers/formatHelpers';

function Header({
  countries,
  filter,
  onChangeFilter,
  countryCount,
  population,
}) {
  const handleInput = (e) => {
    onChangeFilter(e.target.value);
  };

  return (
    <>
      <Container>
        <input
          type="text"
          placeholder="search"
          value={filter}
          onChange={handleInput}
        />
        <span>Countries: {formatNumber(countryCount)} </span>
        <span>Population: {formatNumber(population)} </span>
      </Container>
    </>
  );
}

export default Header;
