import React from 'react';
import useCountries from '../../hooks/useCountries.js';
import CountryCard from '../CountryCard/CountryCard.js';

export default function Main() {
  const countries = useCountries();
  return (
    <div>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </div>
  );
}
