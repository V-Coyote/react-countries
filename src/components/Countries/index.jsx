import React from 'react';

import Country from './Country';

import { List, ItemList } from './styles';

function Countries({ countries }) {
  return (
    <>
      <List>
        {countries.map((country) => {
          return (
            <ItemList key={country.id}>
              <img src={country.flag} alt={country.name} />
              {
                <Country
                  keyId={country.id}
                  country={country.name}
                  population={country.population}
                />
              }
            </ItemList>
          );
        })}
      </List>
    </>
  );
}

export default Countries;
