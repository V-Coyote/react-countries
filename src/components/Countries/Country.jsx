import React from 'react';

import { formatNumber } from '../../helpers/formatHelpers';
import { Info } from './styles';

function Countries({ country, population }) {
  return (
    <>
      <Info>
        <label>{`${formatNumber(population)}`}</label>
        <label>{`${country}`}</label>
      </Info>
    </>
  );
}

export default Countries;
