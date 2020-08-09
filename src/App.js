import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from './styles/global';

import Countries from './components/Countries';
import Header from './components/Header';

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filterCountries, setFilterCountries] = useState([]);
  const [population, setPopulation] = useState(0);

  useEffect(() => {
    let countries = JSON.parse(localStorage.getItem('countries'));

    if (countries === null) {
      const fetchData = async () => {
        await axios
          .get('https://restcountries.eu/rest/v2/all')
          .then((res) => {
            countries = res.data;
            localStorage.setItem('countries', JSON.stringify(res.data));
          })
          .catch((err) => console.log(err));
      };

      fetchData();
    }

    fillUpAllCountries(countries);
  }, []);

  //reset sum of countries
  useEffect(() => {
    if (filter === '') {
      setFilterCountries([]);
    }
  }, [filter]);

  const fillUpAllCountries = (array) => {
    let total = 0;

    array.map(({ name, numericCode, flag, population }) => {
      setAllCountries((allCountries) => [
        ...allCountries,
        {
          id: numericCode,
          name,
          flag,
          population,
          filterName: name.toLowerCase(),
        },
      ]);

      return (total += population);
    });

    setPopulation(total);
  };

  const handleChangeFilter = (nextFilter) => {
    setFilter(nextFilter);

    const nameFilter = nextFilter.toLowerCase();

    const filteredCountries = allCountries.filter((country) => {
      return country.filterName.includes(nameFilter);
    });

    const numPeople = countPopulation(filteredCountries);

    setFilterCountries(filteredCountries);
    setPopulation(numPeople);
  };

  const countPopulation = (countryPeople) => {
    return countryPeople.reduce((accumulator, current) => {
      return accumulator + current.population;
    }, 0);
  };

  return (
    <>
      <Container>
        <h1>Search Countries</h1>

        <Header
          countries={allCountries}
          filter={filter}
          onChangeFilter={handleChangeFilter}
          countryCount={filterCountries.length}
          population={population}
        />

        {filter && <Countries countries={filterCountries} />}
      </Container>
    </>
  );
}

export default App;
